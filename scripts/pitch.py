import asyncio
from playwright.async_api import async_playwright
O='docs/screens/'; B='http://localhost:4321'
async def settle(pg):
    H=await pg.evaluate('document.body.scrollHeight'); y=0
    while y<H: y+=500; await pg.evaluate(f'scrollTo(0,{y})'); await pg.wait_for_timeout(90)
    await pg.wait_for_timeout(1400); await pg.evaluate('scrollTo(0,0)'); await pg.wait_for_timeout(900)
async def shot(b,name,path,w,h,dpr,mob,scroll=0,full=False,act=None):
    ctx=await b.new_context(viewport={'width':w,'height':h},device_scale_factor=dpr,is_mobile=mob,has_touch=mob)
    pg=await ctx.new_page(); await pg.goto(B+path+('&' if '?' in path else '?')+'clean',wait_until='networkidle'); await pg.wait_for_timeout(2600)
    if act: await act(pg)
    if full: await settle(pg); await pg.screenshot(path=O+name,full_page=True)
    else:
        if scroll:
            if isinstance(scroll,str):
                await pg.evaluate(f"(()=>{{const e=document.querySelector('{scroll}');scrollTo(0,e.getBoundingClientRect().top+scrollY-(innerWidth<700?64:76))}})()")
            else: await pg.evaluate(f'scrollTo(0,{scroll})')
            await pg.wait_for_timeout(1800)
        await pg.screenshot(path=O+name)
    await ctx.close()
async def pick(pg, nights=3, idx=12):
    btns=await pg.query_selector_all('.cd:not([disabled])'); await btns[idx].click()
    start=await pg.eval_on_selector('.cd--in','e=>e.dataset.d')
    btns=await pg.query_selector_all('.cd:not([disabled])'); c=[await x.get_attribute('data-d') for x in btns]; c=[x for x in c if x>start]
    await pg.click(f'.cd[data-d="{c[nights-1]}"]'); await pg.wait_for_timeout(300)
async def book2(pg):
    await pick(pg); await pg.click('[data-next]'); await pg.wait_for_timeout(700)
    ok=await pg.query_selector_all('input[name="room"]:not([disabled])'); await ok[-2].check(); await pg.wait_for_timeout(300)
    await pg.evaluate('scrollTo(0,0)')
async def bookm(pg):
    await pick(pg, 2, 9); await pg.evaluate('scrollTo(0,260)'); await pg.wait_for_timeout(300)
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        D=(1440,900,2,False); M=(390,844,3,True)
        only=__import__('sys').argv[1:]
        jobs=[
         ('01-home-desktop.png','/',*D),('02-home-mobile.png','/',*M),
         ('03-home-desktop-full.png','/',1440,900,1,False,0,True),('04-home-mobile-full.png','/',390,844,2,True,0,True),
         ('05-home-rooms-desktop.png','/',*D,'.stay'),('06-home-dining-desktop.png','/',*D,'.taste'),
         ('07-stay-desktop.png','/stay/',*D,620),('08-room-detail-desktop.png','/stay/planters-bungalows/',*D),
         ('09-room-detail-mobile.png','/stay/hillside-cottages/',*M),('10-experiences-desktop.png','/days-here/',*D,1050),
         ('11-gallery-desktop.png','/gallery/',*D),('12-gatherings-desktop.png','/gatherings/',*D),
         ('15-visit-mobile.png','/visit/',*M,'#getting-here'),('16-offers-desktop.png','/offers/',*D,'#winter-weekdays'),
        ]
        await asyncio.gather(*[shot(b,*j) for j in jobs if not only or j[0] in only])
        if only: await b.close(); return
        await shot(b,'13-booking-desktop.png','/book/',*D,act=book2)
        await shot(b,'14-booking-mobile.png','/book/',*M,act=bookm)
        await b.close()
asyncio.run(main())
