interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    datails: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    datails: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const {song:anotherSong, songDuration:duration, datails} = audioPlayer
const {author} = datails

//console.log('Song: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', author)

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3: ', dbz[3])

const [ , , trunks = 'Not found'] : string[] = dbz;
console.log('Personaje 3: ', trunks);
export{}