
// O SET CRIA UMA ESTRUTURA DE DADOS QUE NÃO PERMITE VALORES REPETIDOS, LOGO É ÚTIL PARA VERIFICAR DUPLICATAS
function wordHasDuplicatedLetters(word) {
    const caracteres = new Set(word);
    return caracteres.size === word.length;
}

console.log(wordHasDuplicatedLetters("abcdef"));  // true 
console.log(wordHasDuplicatedLetters("hello"));   // false 
console.log(wordHasDuplicatedLetters("world"));   // true 