function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo pŕivado
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}


const uno = new Carro

uno.getVelocidadeAtual();

console.log(uno.getVelocidadeAtual());

