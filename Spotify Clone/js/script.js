let currentsong = new Audio();
let songs;
async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify%20Clone/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let element = 0; element < as.length; element++) {
        if (as[element].href.endsWith(".mp3")) {
            songs.push(as[element].href.split(`/songs/`)[1]);
        }
    }
    return songs;
}
function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}
currentsong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`;
    document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
})
document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentsong.currentTime = (currentsong.duration * percent) / 100;
})
const playMusic = (track, pause = false) => {
    document.querySelector(".circle").style.left = "0%";
    if (!pause) {
        document.querySelector("#play").src = "img/pause.svg";
    }
    let musicsrc = `http://127.0.0.1:3000/Spotify%20Clone/songs/${track}`;
    currentsong.src = musicsrc;
    currentsong.play();
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
}
async function main() {
    songs = await getSongs();

    let songul = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `
    <li>
    <img class="invert" src="img/music.svg" alt="play">
    <div class="info">
    <div> ${song.replaceAll("%20", " ")}</div>
    <div>Amir</div>
    </div>
    <div class="playnow">
        <span>Play Now</span>
        <img class="invert" src="img/play.svg" alt="Play">
    </div>
    
</li>
    `
    }
    // playMusic(songs[0]);
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e) => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
    document.querySelector("#play").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector("#play").src = "img/pause.svg";
        }
        else {
            currentsong.pause();
            document.querySelector("#play").src = "img/play.svg";
        }
    })
}
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0"
})
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-120%"
})
document.querySelector("#previous").addEventListener("click", e => {
    let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
    if ((index - 1) >= 0) {
        playMusic(songs[index - 1])
    }
}
)
document.querySelector("#next").addEventListener("click", e => {
    let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0]);
    if (index + 1 < songs.length) {
        playMusic(songs[index + 1]);
    }
}
)
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", e => {
    currentsong.volume = parseInt(e.target.value) / 100;
})
main();