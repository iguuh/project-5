// como pegas as tags/elementos html através dos seletores css
const screen1 = document.querySelector(".screenOne")
const screen2 = document.querySelector(".screenTwo")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10) // geração de um número random
let xAttemps = 1

// Eventos
// parte da função callback
//eventlistener está "ouvindo" o click
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// Função callback (função passada como argumento de outra função, que será executada mais tarde)

function handleTryClick (event) {
    event.preventDefault() // "não envie o form"
    // Seleciona o a id inputnumber com o queryselector e armazena em uma const
    const inputNumber = document.querySelector(`#inputNumber`)
    // 
    if (Number(inputNumber.value) == randomNumber ) {
        // adição e remoção da lista de classe.
        toggleScreen()
        // adicionar algo dentro de um elemento (screen2)
        screen2.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativa(s)`
        xAttemps = 0
    }  
        //Verificação se o numero é maior que 10 ou menor que 0, não permitindo a execução
    if (inputNumber.value > 10) {
        alert("Número maior que 10, digite algo entre 0 e 10.")    
    } else if (inputNumber.value < 0){
        alert("Número menor que 0, digite algo entre 0 e 10.")
    }
        // Verifica se o valor é um número
    if (!isNaN(Number(inputNumber.value))) {
        inputNumber.value = ""
        xAttemps++
      }

}
// Volta a tela para a inicial e reseta o número
function handleResetClick() {
    toggleScreen()
    let xAttemps = 1
    randomNumber = Math.round(Math.random() * 10)
}
// faz a troca da screen
function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
