// closure escobo criado quando uma função é declarada
//esse escopo permite a função acesssar e manipular variaveis externas a função

// contexto léxico

const x = "Global";

function fora(){
    const x = "Local";
    function dentro(){
        return x;
    }
    return dentro
}

const minhaFuncao = fora();

console.log(minhaFuncao());