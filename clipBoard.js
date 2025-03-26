const copyButton = document.querySelector('#copy-button')
const input      = document.querySelector('#copy-input')
const p          = document.querySelector('#copy-read')

copyButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    const value = input.value
    navigator.clipboard.writeText(value)
})

function readCopy () {
    navigator.clipboard.readText()
    .then (pasteText => {
        if(pasteText !== '')  p.innerHTML =  `Seu último texto copiado é: ${pasteText}`
    })
}
readCopy()