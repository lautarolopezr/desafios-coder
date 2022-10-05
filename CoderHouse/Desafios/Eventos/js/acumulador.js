const btnM = document.querySelector("#menos")
const btnA = document.querySelector("#mas")
let  valor = document.querySelector("#valor")

let div = document.querySelector("#div")

let b = 0

let contador = 0

btnM.addEventListener("click" , (e) =>{
    if (e.target.classList.contains("menos")){
        contador --
        valor.textContent = contador
    }

})

btnA.addEventListener("click", (e) =>{
    if (e.target.classList.contains("mas")){
        contador ++
        valor.innerText = contador
    }
})

