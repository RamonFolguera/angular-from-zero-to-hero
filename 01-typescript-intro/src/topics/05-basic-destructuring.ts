interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New song'

//desestructuracion con details todo junto
/* const { 
    song:anotherSong, 
    songDuration:duration,  
    details:{ author }
} = audioPlayer; */  // cambiamos el nombre de l constante por si hay conflicto

//desestructuracion details separado
const { 
    song:anotherSong, 
    songDuration:duration,  
    details
} = audioPlayer;  // cambiamos el nombre de l constante por si hay conflicto

const { author } = details;

// console.log('Song: ', anotherSong)
// console.log('Duration: ', duration)
// console.log('Author: ', audioPlayer.details.author)
// console.log('Song duration: ', audioPlayer.songDuration)

// console.log('Author: ', author)


// con la desestructuracion rapidamente podemos extraer piezas que a mi me interesan

// Desestructuración de arreglos

// const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const [ p1, p2, trunks ]: string[] = ['Goku', 'Vegeta', 'Trunks'];

// const [ , , trunks ]: string[] = ['Goku', 'Vegeta'];

// establecer valor por defecto en caso el valor trunks no existe para que no de undefined
const [ , , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

// const trunks = dbz[3] || 'No hay personaje';

console.error('Personaje 3: ', trunks );




export {}