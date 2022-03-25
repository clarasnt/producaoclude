var produto = new Object()
var colar = document.querySelector("#colar")
var ok = document.querySelector("#ok")
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



ok.addEventListener("click", function(){
    var comprimento = document.querySelector("#comprimento")
    var ombro = document.querySelector("#ombro")
    var busto = document.querySelector("#busto")
    var cintura = document.querySelector("#cintura")
    var manga = document.querySelector("#manga")
    var cava = document.querySelector("#cava")
    var escritos = colar.value.split("\t")
    comprimento.value = escritos[0]
    ombro.value = escritos[1]
    busto.value = escritos[2]
    cintura.value = escritos[3]
    manga.value = escritos[4]
    cava.value = escritos[5]
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
    var estampa = document.querySelector("#estampas")
    var status = document.querySelector("#status")
    produto.id = id
    produto.nome = nome.value
    produto.cor = cor.value
    produto.estampa = estampa.value
    produto.status = status.value
    if (id1.value == "top"){
        var comprimento = document.querySelector("#comprimento")
        var ombro = document.querySelector("#ombro")
        var busto = document.querySelector("#busto")
        var cintura = document.querySelector("#cintura")
        var manga = document.querySelector("#manga")
        var cava = document.querySelector("#cava")
        produto.comprimento = comprimento.value
        produto.ombro = ombro.value
        produto.busto = busto.value
        produto.cintura = cintura.value
        produto.manga = manga.value
        produto.cava = cava.value 
        var peca = '{"id":"' + produto.id + '", "nome":"' + produto.nome + '", "cor":"' + produto.cor + '", "status":"' + produto.status + '", "estampa":"' + produto.estampa + '", "comprimento":"' + produto.comprimento + '", "busto":"' + produto.busto + '", "cintura":"' + produto.cintura + '", "manga":"' + produto.manga + '", "cava":"' + produto.cava + '"}'
        setCookie(id, peca, 1000)
        alert("Produto Cadastrado")
    }
})


