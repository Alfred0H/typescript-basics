export const listarArreglos = () => {
    let arreglo = [10, 20, 30, 40];
    for(let numero of arreglo){
        console.log(numero);
    }
}

export const listarString = () => {
    let saludo = 'Buenas noches';

    for(let caracter of saludo){
        console.log(caracter);
    }
}

export const listarInLoop = () => {
    let arreglo = [10,20,30,49];
    for (const key in arreglo) {
        console.log(key);
    }
}