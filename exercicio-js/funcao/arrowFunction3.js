let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);

// no node a variave global é a global, já no browser a global é a window

const obj = {}
comparaComThis = comparaComThis.bind(obj);


let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);

comparaComThisArrow(module.exports);

// cada arquivo js no node significa um modulo, e as funções arrow referenciam o this ao modulo e não ao global do porjeto.



comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);

// o this na função não se altera

