function sortNumbers (qtd, min, max) {

    if(max - min  + 1 < qtd) return false
        
    const numerosSorteados = new Set()

    while (numerosSorteados.size < qtd) {
        const numero = Math.floor(Math.random() * (max - min + 1)) + min;
        numerosSorteados.add(numero)
    }

    return Array.from(numerosSorteados);
}

console.log(sortNumbers(5, 1, 60))