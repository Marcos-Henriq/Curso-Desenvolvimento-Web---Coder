function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}

const produto = {
    nome : 'Notebook',
    preco: 2333,
    desc: 0.12,
    getPreco
}
global.preco = 12;
global.desc = 10;

const carro = {preco : 30000,desc: 10};

console.log(getPreco());
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro,10,'$'));
console.log(getPreco.apply(carro,[10,'$']));