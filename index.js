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
    //await page.waitForSelector('#cb1-edit');

    //await page.type('#cb1-edit', searchFor);

    //await Promise.all([
        //page.waitForNavigation(),
        //page.click('.nav-search-btn')
    //])
    //Executar o document e buscar o que quero dentro da pagina
    
    
    //await page.waitForSelector(3000);
    
})();