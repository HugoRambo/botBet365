// display lobby existe
var displayLobbyExists = false
// display roleta existe
var displayRoletaExists = false
//variaveis de configuração
var colunaRep = 0
var duziaRep = 0
var gale = 0
//contagem de acertos e erros
contagemAcertos = 0
contagemErros = 0
//duzias e colunas da roleta
var primeiraDuzia = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
var segundaDuzia = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
var terceiraDuzia = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36']
var primeiraColuna = ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
var segundaColuna = ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35']
var terceiraColuna = ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36']

//inverter leitura 
var inverterLeitura = false
var leituras = 0

//variavel que indica inicio de aposta
var apostouDuzia = false
var apostouColuna = false

var configuracao = {
    coluna: 0,
    duzia: 0,
    gale: 0
}