const nombres: string[] = [];

const imprimirNombre = () => {
    console.log('Desde aca se imprimiran nombre');

    nombres.push('Juan Perez');
    nombres.push('Maria Perez');

    for (let index = 0; index < nombres.length; index++) {
        console.log(`Nombre: ${nombres[index]}`);   
    }
}

const contarPosiciones = () =>{
    console.log(`la cantidad de nombre es: ${nombres.length}`);
}

export {imprimirNombre, contarPosiciones};