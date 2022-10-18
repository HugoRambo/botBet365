const functionConfiguration = () =>{
    chrome.storage.local.get(["configuration"], (res) => {
        if (res.configuration == undefined) {
            document.getElementById('txtColuna').textContent = 'Repetição de 5 colunas'
            document.getElementById('txtDuzia').textContent = 'Repetição de 5 dúzias'
            document.getElementById('txtGale').textContent = 'Fazer 1 Gale'
        } else {
            document.getElementById('txtColuna').textContent = `Repetição de ${res.configuration.coluna} colunas`
            document.getElementById('txtDuzia').textContent = `Repetição de ${res.cconfiguration.duzia} dúzias`
            document.getElementById('txtGale').textContent = `Fazer ${res.configuration.gale} Gale`
        }
    })
} 