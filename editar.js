var id1 = document.querySelector("#id1")
var id2 = document.querySelector("#id2")
var id3 = document.querySelector("#id3")
var procurar = document.querySelector("#procurar")
var item = document.querySelector("#item")
var edicao1 = document.querySelector("#edicao1")
var edicao2 = document.querySelector("#edicao2")
var editar = document.querySelector("#editar")

id1.addEventListener("change", function(){
    if (id1.value == ""){
        id3.innerHTML = "<option value=''>Selecionar</option>"
        procurar.setAttribute("style", "opacity: 0")
    } else
    if (id1.value == "top"){
        procurar.setAttribute("style", "opacity: 1")
        id3.innerHTML = "<option value=''>Selecionar</option><option value='cs'>CS</option><option value='ct'>CT</option><option value='cp'>CP</option>"
    } else
    if (id1.value == "bot"){
        procurar.setAttribute("style", "opacity: 1")
        id3.innerHTML = "<option value=''>Selecionar</option><option value='cs'>CS</option><option value='ct'>CT</option><option value='cp'>CP</option>"
    }
})

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

item.addEventListener("change", function(){
    if (item.value == "Nome"){
        edicao1.setAttribute("type", "text")
        edicao2.setAttribute("type", "text")
    } else if (item.value == "Status"){
        edicao1.outerHTML = "<select id='edicao11'><option value=''>Selecionar</option><option value='Pausada'>Pausada</option><option value='Fazendo'>Fazendo</option><option value='Pronta'>Pronta</option><option value='Postada'>Postada</option><option value='Vendida'>Vendida</option></select>"
        edicao2.outerHTML = "<select id='edicao22'><option value=''>Selecionar</option><option value='Pausada'>Pausada</option><option value='Fazendo'>Fazendo</option><option value='Pronta'>Pronta</option><option value='Postada'>Postada</option><option value='Vendida'>Vendida</option></select>"
    } else if (item.value == "Cor"){
        edicao1.outerHTML = "<select id='edicao11'><option value=''>Selecionar</option><option value='Branco'>Branco</option><option value='Preto'>Preto</option><option value='Cinza'>Cinza</option><option value='Azul'>Azul</option><option value='Laranja'>Laranja</option></select>"
        edicao2.outerHTML = "<select id='edicao22'><option value=''>Selecionar</option><option value='Branco'>Branco</option><option value='Preto'>Preto</option><option value='Cinza'>Cinza</option><option value='Azul'>Azul</option><option value='Laranja'>Laranja</option></select>"
    }
})

procurar.addEventListener("click", function(){
    var id = id1.value+id2.value+id3.value
    var nomeCookie = document.cookie.split('; ').find(row => row.startsWith(id+"_html")).split('#')[1]
    var elemento = document.querySelector("#produto")
    elemento.innerHTML = nomeCookie
    document.body.appendChild(elemento)
})

editar.addEventListener("click", function(){
    var edicao11 = document.querySelector("#edicao11")
    var edicao22 = document.querySelector("#edicao22")
    var id = id1.value + id2.value + id3.value
    document.querySelector("#peca").innerHTML = document.querySelector("#peca").innerHTML.replace(edicao11.value, edicao22.value)
    var produto = document.querySelector("#produto")
    setCookie(id+"_html", "#" + produto.innerHTML, 50)
})