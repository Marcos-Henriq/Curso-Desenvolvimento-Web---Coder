const soma = function (x,y) {
return y + x;
}
const subtrair = function (maior,menor){
    maior = maior < menor ? menor : maior;
    menor = maior < maior ? maior : menor;
    
    return maior - menor;
}

// função anonima função sem nome;

const imprimirResultado = function(a,b, operacao = soma){
    console.log(operacao(a,b));
} 

imprimirResultado(3,5);
imprimirResultado(20,2,subtrair);

