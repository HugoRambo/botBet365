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
    //Nome do site que quero ir 
    await page.goto('https://ge.globo.com/')
    
    //Aguardar o carregamento do site.
    await page.waitForLoadState('networkidle');

    //await page.pause(); // pause para o comando, e verifica tudo que estou fazendo. 
    //o page.pause(grava qual função é usado naquele momento e auxilia para pegar os comandos. )
    
   //Aceitar cookis 
   await page.locator('text=Aceitar').click()
   await page.locator('.asduhasuduhsadh').click()
   //espera responder
   await page.waitForURL('https://Casinobets')
   await page.locator('.clicar onde eu quero').click()


   //função para trazer informações
    
   async function nameCampetition(){
        //Aguardar até 7500 segundos
        await page.waitForTimeout(7500)
        //Primeiro informação o ALLTEXTCONTENTX, BUSCA TODAS AS INFORMAÇÕES DA pagina
        let listTeamOne = await page.locator('class que quero abrir. time 1').allTextContents()
        //Busco o nome da class
        //await page.pause()
        let listTeamTwo = await page.locator('class que eu quero abrir').allTextContents()
        //buscar todos os times da fileira


        //Quantidade de gols
        let scoreTeamOne = await page.locator('clicar aqui na classe de gosts').allTextContents()

        //Quantidade de gols time dois
        let scoreTeamTwo = await page.locator('Clicar no placar de jogos 2 ').allTextContents()


        //Achar coluna que eu quero.
        let listOddsColuna1 = await page.locator('achar coluna que quero').allTextContents()
        let listOddsColuna2 = await page.locator('achar coluna que quero').allTextContents()
        let listOddsColuna3 = await page.locator('achar coluna que quero').allTextContents()

        

        return {listTeamOne, 
            listTeamTwo,
            scoreTeamOne,
            scoreTeamTwo,
            listOddsColuna1,
            listOddsColuna2,
            listOddsColuna3
        }
    }

    

}
    

  



teste()