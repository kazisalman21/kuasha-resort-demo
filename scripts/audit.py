import asyncio, json
from playwright.async_api import async_playwright
AXE=open('node_modules/axe-core/axe.min.js').read()
PAGES=['/','/stay/','/stay/lake-house/','/days-here/','/dining/','/gatherings/','/offers/','/visit/','/gallery/','/book/','/about-this-demo/']
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        for path in PAGES:
            for vp in [(390,844,True)]:
                ctx=await b.new_context(viewport={'width':vp[0],'height':vp[1]},is_mobile=vp[2],device_scale_factor=2)
                pg=await ctx.new_page(); total=[0]; n=[0]
                async def on(r):
                    try:
                        body=await r.body(); total[0]+=len(body); n[0]+=1
                    except Exception: pass
                pg.on('requestfinished', lambda req: asyncio.ensure_future(on(req)) if False else None)
                await pg.goto('http://localhost:4321'+path+'?clean',wait_until='networkidle')
                # initial load weight via performance API
                w=await pg.evaluate("performance.getEntriesByType('resource').reduce((s,e)=>s+(e.transferSize||e.encodedBodySize||0),0)+(performance.getEntriesByType('navigation')[0].transferSize||0)")
                cnt=await pg.evaluate("performance.getEntriesByType('resource').length")
                lcp=await pg.evaluate("""new Promise(r=>{let v=0;new PerformanceObserver(l=>{for(const e of l.getEntries())v=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});setTimeout(()=>r(Math.round(v)),500)})""")
                await pg.add_script_tag(content=AXE)
                res=await pg.evaluate("axe.run(document,{runOnly:['wcag2a','wcag2aa','best-practice']}).then(r=>r.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,t:v.nodes.slice(0,2).map(x=>x.target.join(' '))})))")
                print(f"{path:22} {w/1024:7.0f} KB  {cnt:3} req  LCP(local) {lcp}ms  axe: {[(v['id'],v['impact'],v['n']) for v in res]}")
                for v in res: print('     ',v['id'],v['t'])
                await ctx.close()
        await b.close()
asyncio.run(main())
