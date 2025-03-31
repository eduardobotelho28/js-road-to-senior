//usando proxy para validar propriedades de um objeto.

const handler = {

    set(target, key, value) {

        if (key === "idade" && (typeof value !== "number" || value < 0)) {
            console.warn(`Valor inválido para ${key}: ${value}`)
            return false
        }

        if (key === "nome" && value.length < 3) {
            console.warn("O nome deve ter pelo menos 3 caracteres.")
            return false
        }

        target[key] = value; 
    }

};

const usuario = new Proxy({}, handler);

// Testando
usuario.nome  = "Ed";   
usuario.nome  = "Eduardo"; 
usuario.idade = -5;    
usuario.idade = 25;    

console.log(usuario);
