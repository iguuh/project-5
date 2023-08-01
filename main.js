
// como pegas as tags/elementos html através dos seletores css
const screen1 = document.querySelector(".screenOne")
const screen2 = document.querySelector(".screenTwo")

// geração de um número random
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 1

// Função callback (função passada como argumento de outra função, que será executada mais tarde)
function handleTryClick (event) {
    event.preventDefault() // "não envie o form"
    //
    const inputNumber = document.querySelector(`#inputNumber`)
    //
    if (Number(inputNumber.value) == randomNumber ) {
        // adição e remoção da lista de classe.
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
        // adicionar algo dentro de um elemento (screen2)
        screen2.querySelector("h2").innerText = `acertou em ${xAttemps} tentativas`
    } 
   
    // Pega os valores de um input com value
    inputNumber.value = ""
    xAttemps++
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// parte da função callback
//eventlistener está "ouvindo" o click
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove("hide")
        screen2.classList.add("hide")
        let xAttemps = 1
}
)