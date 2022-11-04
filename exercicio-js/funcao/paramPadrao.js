// estrategia 1 para gerar valor padrão

function soma1(a,b,c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    d = d != null ? d : 1
    return a + b + c;
}

console.log(soma1(null,2,2));


// 2015

function soma2(a = 1, b = 1, c = 1){
    return a + b + c;
}
    