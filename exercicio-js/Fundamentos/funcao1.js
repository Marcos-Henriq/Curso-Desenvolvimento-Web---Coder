// função sem retorno
function imprimirSoma(a,b){
    console.log(a+b);
}
imprimirSoma(2,3);
// 5

imprimirSoma(2);
// NaN

imprimirSoma(2,3,4,5,5,3,3,2);
// 5

imprimirSoma()
// Nan

// Função com retorno;
function soma(a = 0,b =0){
    return a + b;
}

console.log(2,3);
