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
    var nomeCookie = document.cookie
    nomeCookie = nomeCookie.split('; ')
    nomeCookie = nomeCookie.find(row => row.startsWith(id+"_html"))
    nomeCookie = nomeCookie.split('=')[1];
    var elemento = document.querySelector("#produto")
    elemento.innerHTML = nomeCookie
    document.body.appendChild(elemento)
})