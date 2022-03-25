var id1 = document.querySelector("#id1")
var id2 = document.querySelector("#id2")
var id3 = document.querySelector("#id3")
var procurar = document.querySelector("#procurar")

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

procurar.addEventListener("click", function(){
    var id = id1.value+id2.value+id3.value
    var produto = JSON.parse(document.cookie.split('; ').find(row => row.startsWith(id)).split('=')[1])
    var elemento = document.querySelector("#produto")
    elemento.innerHTML = "<div id='peca'><p>ID: " + produto.id + "</p><p>Nome: " + produto.nome + "</p><p>Status: " + produto.status + "</p><p>Cor: " + produto.cor + "</p><p>Estampa: " + produto.estampa + "</p><p>MEDIDAS</p><p>Comprimento: " + produto.comprimento + "</p><p>Ombro a Ombro: " + produto.ombro + "</p><p>Busto: " + produto.busto + "</p><p>Cintura: " + produto.cintura + "</p><p>Comprimento da Manga: " + produto.manga + "</p><p>Cava: " + produto.cava + "</p></div>"
    document.body.appendChild(elemento)
})


var imprimir = document.querySelector("#imprimir")
imprimir.addEventListener("click", function(){
    id1 = document.querySelector("#id1")
    id2 = document.querySelector("#id2")
    id3 = document.querySelector("#id3")
    var id = id1.value+id2.value+id3.value
    var produto = JSON.parse(document.cookie.split("; ").find(row => row.startsWith(id)).split("=")[1])
    var doc = new jsPDF()
    doc.setFontSize(15)
    doc.text('Nome: '+produto.nome+"\nCor: "+produto.cor+"\nEstampa: "+produto.estampa+"\nMEDIDAS\nComprimento: "+produto.comprimento+"\nOmbro a Ombro: "+produto.ombro+"\nBusto: "+produto.busto+"\nCintura: "+produto.cintura+"\nComprimento da Manga: "+produto.manga+"\nCava: "+produto.cava, 10, 10)
    doc.save(produto.nome + '.pdf')
})
