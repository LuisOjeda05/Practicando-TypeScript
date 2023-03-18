/*
    ===== Código de TypeScript =====
*/

interface Paseenger {
    name: string,
    children?: string[]
}

const passenger1: Paseenger = {
    name: 'Laura'
}

const passenger2: Paseenger = {
    name: 'Francisco',
    children: ['Roberto', 'Ana', 'Alexander']
}

function showPassengers(passenger: Paseenger): void {
    const amountChildren = passenger.children?.length || 0;

    console.log(amountChildren + 1);

}

showPassengers(passenger1);
showPassengers(passenger2);