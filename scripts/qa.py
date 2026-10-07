"""Visual QA: serve dist/, capture pages at several viewports (full page after a scroll pass)."""
import asyncio, sys, os, subprocess, time
from playwright.async_api import async_playwright
OUT=os.environ.get('QA_OUT','/tmp/claude-0/-home-claude/563191bf-5a11-5b51-a92e-320092061843/scratchpad/qa')
os.makedirs(OUT,exist_ok=True)
VPS={'1440':(1440,900,1,False),'1280':(1280,800,1,False),'768':(768,1024,2,True),'390':(390,844,2,True),'360':(360,740,2,True)}
async def cap(b,path,vp,full=True,clean=True):
    w,h,dpr,mob=VPS[vp]
    ctx=await b.new_context(viewport={'width':w,'height':h},device_scale_factor=dpr,is_mobile=mob,has_touch=mob)
    pg=await ctx.new_page(); errs=[]
    pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
    pg.on('pageerror',lambda e: errs.append(str(e)))
    url='http://localhost:4321'+path+('&' if '?' in path else '?')+('clean' if clean else '')
    await pg.goto(url,wait_until='networkidle',timeout=60000)
    await pg.wait_for_timeout(600)
    name=(path.strip('/').replace('/','_').replace('?','_') or 'home')+f'_{vp}'
    await pg.screenshot(path=f'{OUT}/{name}_fold.png')
    if full:
        H=await pg.evaluate('document.body.scrollHeight'); y=0
        while y<H: y+=int(h*.7); await pg.evaluate(f'scrollTo(0,{y})'); await pg.wait_for_timeout(120)
        await pg.wait_for_timeout(1300); await pg.evaluate('scrollTo(0,0)'); await pg.wait_for_timeout(400)
        await pg.screenshot(path=f'{OUT}/{name}_full.png',full_page=True)
    ow=await pg.evaluate('document.documentElement.scrollWidth')
    await ctx.close()
    return name, errs, ow>w
async def main():
    paths=sys.argv[1].split(','); vps=sys.argv[2].split(',') if len(sys.argv)>2 else ['1440','390']
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for path in paths:
            res=await asyncio.gather(*[cap(b,path,v) for v in vps])
            for n,e,ov in res: print(n, 'ERR:'+'|'.join(e)[:300] if e else '', 'OVERFLOW-X' if ov else '')
        await b.close()
asyncio.run(main())
