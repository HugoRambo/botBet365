let inputColuna = document.getElementById('inputColuna')
let txtColuna = document.getElementById('txtColuna')
txtColuna.textContent = `${inputColuna.value} repetições de colunas`

let inputDuzia = document.getElementById('inputDuzia')
let txtDuzia = document.getElementById('txtDuzia')
txtDuzia.textContent = `${inputDuzia.value} repetições de dúzias`

let inputGale = document.getElementById('inputGale')
let txtGale = document.getElementById('txtGale')
txtGale.textContent = `${inputGale.value} gale`

let btnSalvar = document.getElementById('btnSalvar')
btnSalvar.addEventListener("click", () => {
    salvarConfig();
})

inputColuna.addEventListener("input", () => {
    txtColuna.textContent = `${inputColuna.value} repetições de colunas`
})

inputDuzia.addEventListener("input", () => {
    txtDuzia.textContent = `${inputDuzia.value} repetições de dúzias`
})

inputGale.addEventListener("input", () => {
    txtGale.textContent = `${inputGale.value} gale`
})

async function salvarConfig() {
    var configuracao = {
        coluna: inputColuna.value,
        duzia: inputDuzia.value,
        gale: inputGale.value,
    }
    chrome.storage.local.set({
        configuracao,
    }, () => {
    })
    alert("Configuração gravada")
}

async function carregarConfiguracao() {
    chrome.storage.local.get(["configuracao"], (res) => {

        if (res.configuracao == undefined) {
            var configuracao = {
                coluna: 5,
                duzia: 5,
                gale: 1
            }
            chrome.storage.local.set({
                configuracao,
            }, () => {
            })

            txtColuna.textContent = `5 repetições de colunas`
            txtDuzia.textContent = `5 repetições de dúzias`
            txtGale.textContent = `1 gale`
            inputColuna.value = 5
            inputDuzia.value = 5
            inputGale.value = 1
        } else {
            txtColuna.textContent = `${res.configuracao.coluna} repetições de colunas`
            txtDuzia.textContent = `${res.configuracao.duzia} repetições de dúzias`
            txtGale.textContent = `${res.configuracao.gale} gale`
            inputColuna.value = res.configuracao.coluna
            inputDuzia.value = res.configuracao.duzia
            inputGale.value = res.configuracao.gale
        }

    })
}

carregarConfiguracao()