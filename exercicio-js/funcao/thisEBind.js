const pessoa = {
    saudacao : "Bom Dia",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();


const falar = pessoa.falar;
// conflito entre paradigmas: funcional e o OO

const falarDePessoa = pessoa.falar.bind(pessoa);
// o bind referencia o this ao objeto parametro da função

falarDePessoa();

