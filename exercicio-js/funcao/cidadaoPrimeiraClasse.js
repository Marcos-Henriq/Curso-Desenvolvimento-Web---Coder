// funcao em js é first-class

// Higher-order function;

// criar funções de forma literal
function fun1(){}

// armazenar em uma variavel
const fun2 = function (){}

// armazenar em um array
const array = [function (a,b){return a + b}];
console.log(array[0](2,4));

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return "Opa"; 
}
console.log(obj.falar());

// Passar função como param
function run(fun){
    fun();
}
run(function (){
    console.log("Executando...");
})

// uma função pode retornar/conter um função;
function soma(a,b){
    return function (c){
        console.log(a + b + c);
    }
}

soma(2,3)(4);
