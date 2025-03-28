
//symbol retorna um identificador único. pode ser usado como id dentro de uma classe ou função construtora.

function User (name) {
    this.id = Symbol(name)
    this.name = name
}

function user (name) {
    id = Symbol(name)
    return {name, id}
}

const user1 =  user("eduardo")
const user2 =  user("eduardo")

// console.log(user1.id === user2.id); 
// console.log(Object.keys(user1)); 
// console.log(Object.getOwnPropertySymbols(user1)); 

const obj = {
    nome: "Eduardo",
    [Symbol("id")]: 123
};

console.log("Object.keys:", Object.keys(obj)); // ["nome"]
console.log("Object.getOwnPropertySymbols:", Object.getOwnPropertySymbols(obj)); // [ Symbol(id) ]
console.log("Direto no console:", obj); // { nome: 'Eduardo', [Symbol(id)]: 123 }
