const produto = {
    nome: "Claudin",
    idade: 2
}

const {nome, idade} = produto;

console.log(nome,idade);

const funcao = parametro => parametro.toLowerCase();

console.log(funcao("claudio"));

const funcao2 = ({nome,idade})=>{
    console.log(nome, idade);
}

funcao2(produto);

let array = "Legal,Dahora,Uau,Naruto".split(",");

console.log(array);




