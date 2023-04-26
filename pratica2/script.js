/* const inputNome=document.getElementById("nome")
console.log(inputNome.value)
inputNome.value=""

const inputEndereco=document.getElementById("endereco")
console.log(inputEndereco.value)
inputEndereco.value=""

const inputEmail=document.getElementById("email")
console.log(inputEmail.value)
inputEmail.value="" */

const exibirNome = function () {
    console.log(document.getElementById("nome").value)
}

const exibirEndereco = () => {
    console.log(document.getElementById("endereco").value)
}

const exibirEmail = () => {
    console.log(document.getElementById("email").value)
}

const mostrarForm = () => {
    exibirNome()
    exibirEndereco()
    exibirEmail()
    document.getElementById("nome").value = ""
    document.getElementById("endereco").value = ""
    document.getElementById("email").value = ""
}
let click=0
const mostrarClick=()=> {
    click++
    console.log(`Clicou tantas vezes: ${click}`)
}