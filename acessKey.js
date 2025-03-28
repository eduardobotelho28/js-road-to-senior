const feedbackElement = document.querySelector('#feedback')

document.addEventListener('keydown', (e) => {

    console.log(e)

    if (e.altKey || e.ctrlKey) { 
        if (e.key === 'h') {
            exibirFeedback('Home');
        } else if (e.key === 's') {
            exibirFeedback('Sobre');
        } else if (e.key === 'c') {
            exibirFeedback('Contato');
        }
    }
});

function exibirFeedback(tecla) {
    feedbackElement.textContent = `Você pressionou o atalho de teclado: ${tecla}`;
}