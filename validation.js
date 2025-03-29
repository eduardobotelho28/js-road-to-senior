const button    = document.querySelector('#form-button')
const inputNota = document.querySelector('#nota')
const divMsg    = document.querySelector('#msg')

// button.addEventListener('click', (e) => {

//     e.preventDefault()

//     let msg = null

//     if(!inputNota.checkValidity()) 
//         msg = inputNota.validationMessage
    
//     divMsg.innerHTML = msg

// })

button.addEventListener('click', (e) => {

    e.preventDefault()

    let validationState = inputNota.validity

    inputNota.setCustomValidity("");

    if(validationState.valueMissing) {
        inputNota.setCustomValidity("preencha algum valor para a nota")
    }
    if(validationState.rangeOverflow) {
        inputNota.setCustomValidity("nota muito alta")
    }
    if(validationState.rangeUnderflow) {
        inputNota.setCustomValidity("nota muito baixa")
    }

    if(!inputNota.checkValidity())
        inputNota.reportValidity()
        
})