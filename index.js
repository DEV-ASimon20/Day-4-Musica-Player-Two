const image = document.getElementById('cover');
const title = document.getElementById('music-title');
const artist = document.getElementById('music-artist');
const currentTimeEl = document.getElementById('current-time');
const progress = document.getElementById('progress');
const playerProgress = document.getElementById('player-progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');
const background = document.getElementById('bg-img');
const durationEl = document.getElementById('duration');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'My Tears Are Becoming A Sea',
        cover: 'assets/1.jpg',
        artist: 'M83',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Outro',
        cover: 'assets/2.jpg',
        artist: 'M83',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Wait',
        cover: 'assets/3.jpg',
        artist: 'M83',
    }    
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
}

function playMusic(){
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    if (music.duration) {
        const { duration, currentTime } = music;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        const currentTimeMinutes = Math.floor(currentTime / 60);
        const currentTimeSeconds = Math.floor(currentTime % 60);
        
        durationEl.textContent = `${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
        currentTimeEl.textContent = `${formatTime(currentTimeMinutes)}:${formatTime(currentTimeSeconds)}`;
    }
}

function setProgressBar(e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);





















































// const image = document.getElementById('cover'),
//       title = document.getElementById('music-title'),
//       artist = document.getElementById('music-artist'),
//       currentTimeEl = document.getElementById('current-time'),
//       progress = document.getElementById('progress'),
//       playerProgress = document.getElementById('player-progress'),
//       prevBtn = document.getElementById('prev'),
//       nextBtn = document.getElementById('next'),
//       playBtn = document.getElementById('play'),
//       background = document.getElementById('bg-img');
//       durationEl = document.getAnimations('')

// const music = new Audio();

// const songs = [
//     {
//         path: 'assets/1.mp3',
//         displayName: 'My Tears Are Becoming A Sea',
//         cover: 'assets/1.jpg',
//         artist: 'M83',
//     },

//     {
//         path: 'assets/2.mp3',
//         displayName: 'Outro',
//         cover: 'assets/2.jpg',
//         artist: 'M83',
//     },


//     {
//         path: 'assets/3.mp3',
//         displayName: 'Wait',
//         cover: 'assets/3.jpg',
//         artist: 'M83',
//     }    
// ];

// let musicIndex = 0;
// let isPlaying = false;


// function togglePlay(){
//     if(isPlaying){
//         pauseMusic();
//     }
//     else{
//         playMusic();
//     }
// }

// function playMusic(){
//     isPlaying = true;
//    //Change play buttin icon
//     playBtn.classList.replace('fa-play', 'fa-pause');
//     //set button hover title
//     playBtn.setAttribute('title', 'Pause');
//     music.play();
// }

// function pauseMusic(){
//     isPlaying = false;
//     //Change pause Button icon
//     playBtn.classList.replace('fa-pause', 'fa-play');
//     //set button hover title
//     playBtn.setAttribute('title', 'Play');
//     music.pause();
// }

// function loadMusic(song){
//     music.src = song.path;
//     title.textContent = song.displayName;
//     artist.textContent = song.artist;
//     image.src = song.cover;
//     background.src = song.cover;
// }

// function changeMusic(direction){
//     musicIndex = (musicIndex + direction + songs.length) % songs.length;
//     loadMusic(songs[musicIndex]);
//     playMusic();
// }

// function updateProgressBar(){
//     const { duration, currentTime } = music;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;

//     const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
//     const durationMinutes = Math.floor(duration / 60);
//     const durationSeconds = Math.floor(duration % 60);
//     const currentTimeMinutes = Math.floor(currentTime / 60);
//     const currentTimeSeconds = Math.floor(currentTime % 60);
    
//     // Corrige el uso de duration
//     durationEl.textContent = `${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
//     currentTimeEl.textContent = `${formatTime(currentTimeMinutes)}:${formatTime(currentTimeSeconds)}`;    
// }

// function setProgressBar(e){
//     const width = playerProgress.clientWidth;
//     const clickX = e.offsetX;
//     music.currentTime = (clickX / width) * music.duration;
// }

// playBtn.addEventListener('click', togglePlay);
// prevBtn.addEventListener('click', () => changeMusic(-1));
// nextBtn.addEventListener('click', () => changeMusic(1));
// music.addEventListener('ended', () => changeMusic(1));
// music.addEventListener('timeupdate', updateProgressBar);
// playerProgress.addEventListener('click', setProgressBar);

// loadMusic(songs[musicIndex]);