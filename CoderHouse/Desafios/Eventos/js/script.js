//Extraer datos
const producto = document.getElementById("producto")
const precio = document.getElementById("price")
const btnSend = document.querySelector(".send__button")

const trescuotas = document.getElementById("trescuotas")
const seiscuotas = document.getElementById("seiscuotas")
const nuevecuotas = document.getElementById("nuevecuotas")
const docecuotas = document.getElementById("docecuotas")
const dieciochocuotas = document.getElementById("cuotas")



btnSend.addEventListener("click" , () =>{
    let productValue = producto.value
    let priceValue = precio.value

    console.log(productValue, priceValue)
}) 


const objeto = [
    {
        nombre : "Lautaro",


    }
]

const cuotas = document.querySelector(".cuotas")

let valor;

cuotas.forEach(e => {
    e.addEventListener("click" , ()=>{
        valor = e.id
    })
    console.log(e.id)
});




