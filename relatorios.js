var tipo = document.querySelector("#tipo")
var item = document.querySelector("#item")
var nome_item = document.querySelector("#nome_item")
var pesquisar = document.querySelector("#pesquisar")
var tabela = document.querySelector("#tabela")
var produtos = []

tipo.addEventListener("change", function(){
    if (tipo.value == ""){
        nome_item.innerHTML = ""
        item.innerHTML = ""
    } else
    if (tipo.value == "Status"){
        nome_item.innerHTML = "Status"
        item.innerHTML = "<option value=''>Selecionar</option><option value='Pausada'>Pausada</option><option value='Fazendo'>Fazendo</option><option value='Pronta'>Pronta</option><option value='Postada'>Postada</option><option value='Vendida'>Vendida</option>"
    } else
    if (tipo.value == "Cor"){
        nome_item.innerHTML = "Cor"
        item.innerHTML = "<option value=''>Selecionar</option><option value='Branco'>Branco</option><option value='Preto'>Preto</option><option value='Cinza'>Cinza</option><option value='Azul'>Azul</option><option value='Laranja'>Laranja</option>"
    } else
    if (tipo.value == "Estampa"){
        nome_item.innerHTML = "Estampa"
        item.innerHTML = "<option value=''>Selecionar</option><option value='Estrela'>Estrela</option><option value='Coracao'>Coracao</option><option value='Triangulo'>Triangulo</option><option value='Losangulo'>Losangulo</option><option value='Olho'>Olho</option>"
    }
})

pesquisar.addEventListener("click", function(){
    tabela.innerHTML = "<tr><th>ID</th><th>Nome</th><th>Cor</th><th>Estampa</th></tr>"
    var nome_cookie = document.cookie.split("; ")
    for (var i = 1; i <= nome_cookie.length/2; i++){
        produtos.push(JSON.parse(nome_cookie.find(row => row.startsWith("top" + i + "cs=")).split("=")[1]))
    }
    var escolhidos = produtos.filter(function(element){
        return element.status == item.value
    })
    escolhidos.forEach(function(element){
        if (tipo.value = "Status"){
            var linha = document.createElement("tr")
            linha.innerHTML = "<th>" + element.id + "</th><th>" + element.nome + "</th><th>" + element.cor +"</th><th>" + element.estampa + "</th>"
            tabela.appendChild(linha)
        }
    })
    
})