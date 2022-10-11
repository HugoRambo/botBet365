//npm i playwright
//npx playwright install 
const { firefox } = require('playwright')

async function bet365 () {
    const browser = await firefox.launch()
    const page = await browser.newPage()

    await page.goto('https://ge.globo.com/')
    
    await page.waitForLoadState('networkidle')
    await page.screenshot({ path:   `exemplo.png`})
    await browser.close()
};

bet365()