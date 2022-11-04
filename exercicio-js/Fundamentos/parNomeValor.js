// par nome/valor

const saudacao = "Olá"; // CONTEXTO LÉXICO 1

function exec(){
    const saudacao = "Falaaa" // CONTEXTO LÉXICO 2
    return saudacao;
}

// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Rogerin',
    idade: 32,
    peso:90,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao);
console.log()

