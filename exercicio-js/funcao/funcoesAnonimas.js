const soma = function (x, y) {
    return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 3);

const subtrair = function (a, b) {
    return a - b;
}

imprimirResultado(10, 5, subtrair);

imprimirResultado(10, 8, (a, b) => {
    return a + b;
})

const pessoa = {
    falar: function () {
        console.log("Olá");
    }
}

pessoa.falar();