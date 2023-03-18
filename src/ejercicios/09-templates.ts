/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy("Hola mundo");
let soyNumero = queTipoSoy(69);
let soyArreglo = queTipoSoy([1, 2, 3]);

let soyExplicito = queTipoSoy<number>(100);