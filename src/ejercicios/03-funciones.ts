/*
    ===== Código de TypeScript =====
*/

function add(a: number, b: number): number {
    return a + b;
}

const addArrow = ((a: number, b: number): number => {
    return a +b;
})

function multiply(number1: number = 1, number2: number = 1, number3?: number): number {
    return number1 * number2;
} 

/*console.log(add(5, 7));
console.log(addArrow(8, 8));
console.log(multiply());
console.log(multiply(5, 3));
console.log(multiply(6, 4, 2));*/

interface Player2 {
    name: string,
    health: number,
    showHealth?: () => void
}

const player2: Player2 = {
    name: 'Antonio',
    health: 80,
    showHealth() {
        console.log('Health:', this.health);
    }
}

function cure(player: Player2, healing: number): void {
    player.health += healing;

    console.log(player);
}

cure(player2, 20);
player2.showHealth();