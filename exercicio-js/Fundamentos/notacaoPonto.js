console.log(Math.floor.cei(6.1));

const any1 = {}
any1.nome = "Bola";

console.log(any1.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");

obj2.exec();




