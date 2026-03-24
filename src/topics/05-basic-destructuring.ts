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

const {} = audioPlayer

console.log('Song: ')
export{}