const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ // arredondando a nota prra baixo;
        case 10: case 9:
            console.log('Quadro de Honra');
            break;
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log("recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("reprovado");
            break
        default:
            console.log("Nota Inválida");
    }
}