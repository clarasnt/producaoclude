var produto = new Object()

var id1 = document.querySelector("#id1")
var id2 = document.querySelector("#id2")
var medidas = document.querySelector("#medidas")
var id3 = document.querySelector("#id3")
var adicionar = document.querySelector("#adicionar")

id1.addEventListener("change", function(){
    if (id1.value == ""){
        id3.innerHTML = "<option value=''>Selecionar</option>"
        medidas.innerHTML = "<p>MEDIDAS</p>"
        adicionar.setAttribute("style", "opacity: 0")
    } else
    if (id1.value == "top"){
        adicionar.setAttribute("style", "opacity: 1")
        medidas.innerHTML = "<p>MEDIDAS</p><label for='comprimento'>Comprimento: </label><input type='number' name='comprimento' id='comprimento'><br><br><label for='ombro'>Ombro a Ombro: </label><input type='number' name='ombro' id='ombro'><br><br><label for='busto'>Busto: </label><input type='number' name='busto' id='busto'><br><br><label for='cintura'>Cintura: </label><input type='number' name='cintura' id='cintura'><br><br><label for='manga'>Comprimento da Manga: </label><input type='number' name='manga' id='manga'><br><br><label for='cava'>Cava: </label><input type='number' name='cava' id='cava'><br><br>"
        id3.innerHTML = "<option value=''>Selecionar</option><option value='cs'>CS</option><option value='ct'>CT</option><option value='cp'>CP</option>"
    } else
    if (id1.value == "bot"){
        adicionar.setAttribute("style", "opacity: 1")
        medidas.innerHTML = "<p>MEDIDAS</p><label for='comprimento'>Comprimento: </label><input type='number' name='comprimento' id='comprimento'><br><br><label for='cintura'>Cintura: </label><input type='number' name='cintura' id='cintura'><br><br><label for='quadril'>Quadril: </label><input type='number' name='quadril' id='quadril'><br><br><label for='barra'>Barra: </label><input type='number' name='barra' id='barra'><br><br>"
        id3.innerHTML = "<option value=''>Selecionar</option><option value='cs'>CS</option><option value='ct'>CT</option><option value='cp'>CP</option>"
    }
})

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

adicionar.addEventListener("click", function(){
    var id = id1.value+id2.value+id3.value
    var nome = document.querySelector("#nome")
    var cor = document.querySelector("#cor")
    var status = document.querySelector("#status")
    produto.id = id
    produto.nome = nome.value
    produto.cor = cor.value
    produto.status = status.value
    if (id1.value == "top"){
        var comprimento = document.querySelector("#comprimento")
        produto.comprimento = comprimento.value
        var ombro = document.querySelector("#ombro")
        produto.ombro = ombro.value
        var busto = document.querySelector("#busto")
        produto.busto = busto.value
        var cintura = document.querySelector("#cintura")
        produto.cintura = cintura.value
        var manga = document.querySelector("#manga")
        produto.manga = manga.value
        var cava = document.querySelector("#cava")
        produto.cava = cava.valuevar 
        var produto_html = value = "!<div id='peca'><p>ID: " + produto.id + "</p><p>Nome: " + produto.nome + "</p><p>Status: " + produto.status + "</p><p>Cor: " + produto.cor + "</p><p>MEDIDAS</p><p>Comprimento: " + produto.comprimento + "</p><p>Ombro a Ombro: " + produto.ombro + "</p><p>Busto: " + produto.busto + "</p><p>Cintura: " + produto.cintura + "</p><p>Comprimento da Manga: " + produto.manga + "</p><p>Cava: " + produto.cava + "</p></div>"
        setCookie(id + "_html", produto_html, 20)
    }
})


