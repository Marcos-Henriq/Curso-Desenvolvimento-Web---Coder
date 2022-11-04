function tratarErroLancar(erro){
    throw new Error(erro);
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!!!!')
    }catch(e){
        tratarErroLancar(e);
    }finally{
    console.log("Finalizando try catch")
    }
}

const obj = {nome: 'Claudio'};

imprimirNomeGritado(obj);

