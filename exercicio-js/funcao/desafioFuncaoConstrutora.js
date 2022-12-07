function Pessoa(nome){
    const self = this;
    self.nome = nome;

    this.falar = function(){
        console.log("Meu nome é: "+self.nome);
    }
}

const p1 = new Pessoa("João");

p1.falar();



