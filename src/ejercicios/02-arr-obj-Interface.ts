/*
    ===== Código de TypeScript =====
*/

let skills: string[] = ['Shotgun', 'Pistol', 'Katana'];

skills.push('Rifle');

interface Player {
    name: string,
    health: number,
    skills: string[]
    hometown?: string
};

const player: Player = {
    name: 'Luis',
    health: 100,
    skills: ['Bazooka']
};

player.hometown = 'San Isidro';

console.log(skills);

console.table(player);