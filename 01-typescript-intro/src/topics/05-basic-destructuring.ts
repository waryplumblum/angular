
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Caballo viejo (Bamboleo)",
    details: {
        author: "Martin Zarzar",
        year: 1998
    }
}

const song = 'New Song';
const { song:anotherSong, audioVolume:volume, songDuration:duration, details /*:{ author }*/} = audioPlayer;
const { author, year } = details;

console.log('Song: ', anotherSong);
console.log('Volume: ', volume);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Year: ', year);

export{};