
//simula req a API através de promise.

function fetchUserData (userId) {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {

            const users = {
                1: { nome: "Eduardo", idade: 20 },
                2: { nome: "Ana", idade: 30 },
                3: { nome: "Carlos", idade: 28 }
            };
    
            const user = users[userId];
    
            if (user) {
                resolve(user);
            } else {
                reject(`Usuário com ID ${userId} não encontrado.`);
            }
        }, 2000);
    })
}

fetchUserData(3)
.then ( user => console.log(user))
.catch(error => console.log(error))