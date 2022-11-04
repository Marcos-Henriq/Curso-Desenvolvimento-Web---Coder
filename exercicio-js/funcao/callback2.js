const notas = [7.7, 7.5, 5.6, 5.6, 8.0, 9.0];

// sem array;

const notasBaixas = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

// com callback

const notasBaixas2 = notas.filter(nota => nota < 7);

console.log("Com For:" + notasBaixas);
console.log("Com Filter:" + notasBaixas2);



