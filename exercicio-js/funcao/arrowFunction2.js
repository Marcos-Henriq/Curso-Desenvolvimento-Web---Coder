function Pessoa(){
    const self = this;
    self.idade = 0;
    setInterval(() => {
        self.idade ++;
        console.log(self.idade);
    }, 1000);
}

new Pessoa;
