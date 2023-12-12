let hover = document.getElementsByClassName("hover-proyectos")

hover.forEach(img =>{
    img.addEventListener("mouseover", () =>{
        agregarTexto()
    })
})

function agregarTexto(){
    let nuevoImg =  `Entrar a la Pagina `
    hover.innerHTML += nuevoImg

}