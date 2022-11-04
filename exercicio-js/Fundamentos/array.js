const valores = [
    1,2,3,4,5,6,7,8,9,10
]

console.log(valores[0]);
console.log(valores[1]);

console.log(valores.push.length);

valores.push({id:3},false,null,'teste');

console.log(valores);

console.log(valores.pop());
// apaga o ultimo item do array

delete valores[0];
// apagar uma certa posicao

console.log(typeof valores);

