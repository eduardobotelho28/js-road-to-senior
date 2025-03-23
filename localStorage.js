const all_inputs = document.querySelectorAll('input')

//para cada vez que o usuário terminar de digitar algo em um input, salva o valor no localStorage.
all_inputs.forEach (input => {
    input.addEventListener('blur', evt => {
        const input = evt.target
        localStorage.setItem(`${input.id}`, `${input.value}`)

    })
})

//verifica se o usuário tinha digitado algo anteriormente (localStorage).
const verificaLocalStorage = () => {
    if(localStorage.length) {
        for (let index = 0; index < localStorage.length; index++) {
            
            const key = localStorage.key(index)
            const input_element = document.querySelector(`input#${key}`)

            if(input_element)  
                input_element.value = localStorage.getItem(key)

            else 
                localStorage.removeItem(key);
            
        }
    }
}

verificaLocalStorage()

