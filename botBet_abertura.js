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
    
    await page.getByRole('button', { name: 'PROSSEGUIR' }).click();
    
    await page.screenshot ( {path: `imagemasde2e45523.png`});
    //await page.pause();
    //o page.pause(grava qual função é usado naquele momento e auxilia para pegar os comandos. )

    await browser.close();

}

teste()