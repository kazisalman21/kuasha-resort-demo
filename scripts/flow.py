import asyncio, sys
from playwright.async_api import async_playwright
D='/tmp/claude-0/-home-claude/563191bf-5a11-5b51-a92e-320092061843/scratchpad/qa/'
async def run(b, vp):
    w,h,dpr,mob = (1440,900,1,False) if vp=='1440' else (390,844,2,True)
    ctx=await b.new_context(viewport={'width':w,'height':h},device_scale_factor=dpr,is_mobile=mob,has_touch=mob)
    pg=await ctx.new_page(); errs=[]
    pg.on('pageerror',lambda e: errs.append(str(e))); pg.on('console',lambda m: errs.append(m.text) if m.type=='error' else None)
    await pg.goto('http://localhost:4321/book/?clean',wait_until='networkidle')
    await pg.click('[data-next]'); await pg.wait_for_timeout(300)
    await pg.screenshot(path=D+f'flow1err_{vp}.png')
    # pick first available weekday ~10 days ahead, then +3 nights
    btns=await pg.query_selector_all('.cd:not([disabled])')
    await btns[8].click(); await pg.wait_for_timeout(200)
    await pg.screenshot(path=D+f'flow1mid_{vp}.png')
    btns=await pg.query_selector_all('.cd:not([disabled])')
    # choose 3rd enabled after the start
    start=await pg.eval_on_selector('.cd--in','e=>e.dataset.d')
    cand=[await x.get_attribute('data-d') for x in btns]; cand=[c for c in cand if c>start]
    await pg.click(f'.cd[data-d="{cand[2]}"]'); await pg.wait_for_timeout(200)
    await pg.click('[data-g="c+"]'); await pg.wait_for_timeout(150)
    await pg.screenshot(path=D+f'flow1_{vp}.png')
    await pg.click('[data-next]'); await pg.wait_for_timeout(700)
    await pg.screenshot(path=D+f'flow2_{vp}.png')
    ok=await pg.query_selector_all('input[name="room"]:not([disabled])')
    await ok[min(2,len(ok)-1)].check(); await pg.wait_for_timeout(200)
    await pg.screenshot(path=D+f'flow2sel_{vp}.png', full_page=True)
    await pg.click('[data-next]'); await pg.wait_for_timeout(600)
    await pg.check('input[value="pickup"]'); await pg.check('input[value="driver"]')
    await pg.click('[data-next]'); await pg.wait_for_timeout(300)
    await pg.screenshot(path=D+f'flow3err_{vp}.png')
    await pg.fill('input[name="name"]','Farhana Rahman'); await pg.fill('input[name="phone"]','01711-234567')
    await pg.fill('textarea[name="notes"]','It is our anniversary on the second night.')
    await pg.click('[data-next]'); await pg.wait_for_timeout(700)
    await pg.screenshot(path=D+f'flow4_{vp}.png', full_page=True)
    await pg.click('[data-next]'); await pg.wait_for_timeout(900)
    await pg.screenshot(path=D+f'flow5_{vp}.png')
    print(vp,'errors:',errs, 'url', pg.url)
    await ctx.close()
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        await asyncio.gather(run(b,'1440'),run(b,'390'))
        await b.close()
asyncio.run(main())
