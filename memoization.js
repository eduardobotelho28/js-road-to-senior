function memoizeFactorial() {
    const cache = {}; 

    return function fatorial(n) {
        if (n in cache) {
            console.log('esta no cache')
            return cache[n]; 
        } 

        let resultado = 1;
        for (let i = n; i > 1; i--) {
            resultado *= i;
        }

        cache[n] = resultado; 
        return resultado;
    };
}

const fatorial = memoizeFactorial(); 

console.log(fatorial(5)); 
console.log(fatorial(5)); 
console.log(fatorial(6)); 
console.log(fatorial(6)); 
