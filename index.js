const puppeteer = require("puppeteer");

(async function main(){
    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        //Mascaro o boot
        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36")

        await page.goto("https://web.whatsapp.com/");

        //. para chamar uma class...
        await page.waitForSelector("selectable-text copyable-text")
        
        //Tempo  que quero que boot fique parado esperando...

        await delay(5000);

        
        const contact = "Amorzinho";

        await page.click(`span[title='${contactName}']`);

        await page.waitForSelector(".OTBsx");
        
        //CRIAR A MENSAGEM
        
        const editor = await page.$("div[tabindex='-1']");

        //Focar onde quero.
        await editor.focus();

        const amountOfMessages = 500

        for(var i = 0; i < amountOfMessages; i++){
            await page.evaluate(() => {
                const message = "Luan voce é bobao"
                document.execCommand("insertText", false, message);
            });
            await page.click("span[data-testid='send']");
            await delay(500)
        }
    
    }catch(e){
        console.log("erro definido é", e)
    }
})();


function delay(time){
    return new Promise(function(resolve){
        setTimeout(resolve, time);
    });
}