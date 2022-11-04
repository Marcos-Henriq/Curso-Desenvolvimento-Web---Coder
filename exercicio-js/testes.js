const fabricantes = ['Toyota', 'Toyota2', 'Nissan', 'BMW', 'Audi'];

let marcaDaVez = "T";

const response = fabricantes.filter((marca) => {
    return marca.indexOf(marcaDaVez) > -1;
})

console.log(response);