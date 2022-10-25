const {chromium} = require('playwright')
//const { webkit } = require('playwright');
async function lastGol (){
    const browser = await chromium.launch({headless: false})
    //const browser = await webkit.launch({headless: false});
    const page =await browser.newPage()

    await page.goto('https://casino.bet365.com/home')
    await page.waitForLoadState('networkidle')
    //const context = await browser.newContext();
    
    //await page.getByRole( }).click();
    //await page.getByRole('button', { name: 'Login' }).click();

    //await page.getByPlaceholder('Usuário').click();
    //await page.getByLabel('Usuário').fill('hugorambo18');
    //await page.getByLabel('Senha').fill('Fifaemarra2008');
    //await page.getByRole('button', { name: 'Fazer Login' }).click();
    //await page.waitForURL('https://casino.bet365.com/home');
    //await page.waitForLoadState('networkidle')
    
    //await page.frameLocator('iframe >> nth=0').getByRole('button', { name: 'Lembrar-me Mais Tarde' }).click();
    //await page.frameLocator('iframe >> nth=0').getByRole('button', { name: 'Lembrar-me Mais Tarde' }).click();

    
    await page.screenshot({ path: `exemplu.png`})
    
    await browser.close()

};

lastGol()