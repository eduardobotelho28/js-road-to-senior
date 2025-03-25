
const word = 'test, test, test, php, js'
const map = countWords(word)

function countWords (text) {
    const words = text.toLowerCase().match(/\b\w+\b/g); 
    const map = new Map()
    words.forEach( word=> {
        map.set(word, (map.get(word) || 0) + 1)
    });
    return map
}