// NPX playwright 


/*const {firefox} = require('playwright')

async function lastGol (){
    const browser = await firefox.launch({headless: false})
    const page =await browser.newPage()

    await page.goto('https://ge.globo.com/')
    await page.waitForLoadState('networkidle')
    
    await page.screenshot({ path: `exemplu.png`})
    
    await browser.close()

};

lastGol()*/

const { webkit } = require('playwright');

async function teste ()  {
    const browser = await webkit.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://ge.globo.com/')
    
    await page.waitForLoadState('networkidle');

    //await page.pause(); // pause para o comando, e verifica tudo que estou fazendo. 
    const context = await browser.newContext();
    await page.getByRole('button', { name: 'PROSSEGUIR' }).click();
    await page.locator('#header-produto').getByText('TIMES').first().click();
    // ---------------------
    
    await page.screenshot ( {path: `imagemasdsa.png`});
    await context.close();
    await browser.close();

}

teste()


//minuto 10 https://www.youtube.com/watch?v=PIDYRoqkW2s&list=PLtEP3BVZ3NUgP_KdOJbMb9kDNMe2TTCT0&index=3