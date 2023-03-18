/*
    ===== Código de TypeScript =====
*/

interface MusicPlayer {
    volume: number,
    time: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const musicPlayer: MusicPlayer = {
    volume: 98,
    time: 69,
    song: 'Redemption Song',
    details: {
        author: 'Bob Marley',
        year: 1880
    }
}

const { volume, song, details } = musicPlayer;

const { author: authorDetail } = details;

/*console.log('Volumen actual: ' + volume);
console.log('Cancion actual: ' + song);
console.log('Autor: ', authorDetail);*/

const dbz: string[] = ['Goku', 'Vegeta', 'Freezer'];

const [ , , p3 ] = dbz;

console.log('Personaje #1: ', dbz[0]);
console.log('Personaje #1: ', dbz[1]);
console.log('Personaje #1: ', p3);