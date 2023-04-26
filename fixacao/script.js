const lerParagrafo=document.getElementById("paragrafo")


const input=document.getElementById("texto")

const teclaPressionada=()=> {
    console.log(input.value)
}

const substituicao=()=> {
    lerParagrafo.innerHTML=input.value
    input.value=""
}