function criarProduto(nome,preco, desconto = 0.1){
    return {
        nome: nome,
        preco:preco,
        desconto:desconto      
    }
}

const produto1 = criarProduto("Coca Cola",9.00,0.5);

console.log(produto1);