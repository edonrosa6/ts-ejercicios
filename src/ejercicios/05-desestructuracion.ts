/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 101,
    segundo: 15,
    cancion: 'Lil Peep - CryBaby',
    detalles: {
        autor: 'Lil Peep',
        anio: 2016
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

// console.log('El volumen actual es: ', volumen);
// console.log('El segundo actual es: ', segundo);
// console.log('La canción actual es: ', cancion);
// console.log('El autor es: ', autor);
// console.log('El año de la canción es: ', anio);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);