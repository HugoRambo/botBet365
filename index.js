const pup = require('puppeteer')

const url ="https://www.mercadolivre.com.br/";

//Termo de busca. 
const searchFor = "macbook";
let c = 1;

(async () =>{
    const browser = await pup.launch({headless: false});
    const page = await browser.newPage();
    console.log('Iniciei!');

    await page.goto(url);
    console.log("Fui para a URL ");

    //Esperar o seletor
    await page.waitForSelector('#cb1-edit');

    await page.type('#cb1-edit', searchFor);

    await Promise.all([
        page.waitForNavigation(),
        page.click('.nav-search-btn')
    ])
    //Executar o document e buscar o que quero dentro da pagina
    const links = await page.$$eval('.ui-search-result__image > a', el => el.map(link =>link.href));
    
    for (const link of links){
        console.log('Pagina', c);
        
        await page.goto(link);
        await page.waitForSelector();

        const  title = await page.$eval('.ui-pdp-title', element => element.innerText);
        const  price = await page.$eval('.andes-money-amount__fraction', element => element.innerText);

        const obj = {title, price};
        console.log(obj);

        c++;
    }
    
    await page.waitForSelector(3000);
    
})();