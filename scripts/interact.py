import asyncio
from playwright.async_api import async_playwright
D='/tmp/claude-0/-home-claude/563191bf-5a11-5b51-a92e-320092061843/scratchpad/qa/'
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch()
        ctx=await b.new_context(viewport={'width':390,'height':844},device_scale_factor=2,is_mobile=True,has_touch=True)
        pg=await ctx.new_page()
        await pg.goto('http://localhost:4321/?clean',wait_until='networkidle')
        await pg.click('[data-menu-open]'); await pg.wait_for_timeout(500); await pg.screenshot(path=D+'menu_390.png')
        await pg.keyboard.press('Escape'); await pg.wait_for_timeout(200)
        await pg.evaluate('scrollTo(0,1400)'); await pg.wait_for_timeout(700); await pg.screenshot(path=D+'bar_390.png')
        await pg.click('.mbar a[data-demo-contact="whatsapp"]'); await pg.wait_for_timeout(500); await pg.screenshot(path=D+'wa_390.png')
        await pg.goto('http://localhost:4321/gallery/?clean',wait_until='networkidle')
        await pg.click('.gl__b >> nth=2'); await pg.wait_for_timeout(800); await pg.screenshot(path=D+'lb_390.png')
        await ctx.close()
        ctx=await b.new_context(viewport={'width':1440,'height':900})
        pg=await ctx.new_page(); await pg.goto('http://localhost:4321/?clean',wait_until='networkidle')
        await pg.click('#tab-planters-bungalows'); await pg.wait_for_timeout(400)
        el=await pg.query_selector('.stay'); await el.screenshot(path=D+'tabs_1440.png')
        # keyboard: tab order from top
        await pg.keyboard.press('Tab'); f1=await pg.evaluate('document.activeElement.textContent.trim()')
        await pg.goto('http://localhost:4321/?clean',wait_until='networkidle'); await pg.evaluate('scrollTo(0,1200)'); await pg.wait_for_timeout(500)
        await pg.screenshot(path=D+'hdr_solid_1440.png')
        print('first tab:',f1)
        await b.close()
asyncio.run(main())
