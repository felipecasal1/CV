let hover = document.getElementsByClassName("hover-proyectos")

let elementosHover = [...hover]
console.log(elementosHover)



elementosHover.forEach((el) => {
el.addEventListener("click", () =>{
    agregarTexto()
})


})




function agregarTexto() {
    alert("se te redirigira a este proyecto")
}