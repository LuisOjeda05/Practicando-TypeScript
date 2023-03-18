/*
    ===== Código de TypeScript =====
*/

function classDecorattor<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
        newProperty = "new Property";
        hello = "override";
    };
}


@classDecorattor
class MiSuperClase {
    public miPropiedad: string = "ABC123";

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();