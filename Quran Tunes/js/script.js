let currentsong = new Audio();
let songs;
let currfolder;
async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/Quran%20Tunes/${currfolder}/`);
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let element = 0; element < as.length; element++) {
        if (as[element].href.endsWith(".mp3")) {
            songs.push(as[element].href.split(`/${currfolder}/`)[1]);
        }
    }
    let songul = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songul.innerHTML = "";
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `
    <li>
    <img class="invert" src="img/music.svg" alt="play">
    <div class="info">
    <div> ${song.replaceAll("%20", " ")}</div>
    <div>Al Quran</div>
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
    let musicsrc = `http://127.0.0.1:3000/Quran%20Tunes/${currfolder}/${track}`;
    currentsong.src = musicsrc;
    currentsong.play();
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)} / ${secondsToMinutesSeconds(currentsong.duration)}`;
}
async function main() {
    songs = await getSongs("songs");
    displayAlbums();
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
async function displayAlbums() {
    let a = await fetch("http://127.0.0.1:3000/Quran%20Tunes/Tilawats/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors);
    for (let i = 0; i < array.length; i++) {
        let e = array[i];
        if (e.href.includes("/Tilawats") && !e.href.includes("htaccess")) {
            let folder = e.href.split("/").slice(-2)[0];
            let a = await fetch(`http://127.0.0.1:3000/Quran%20Tunes/Tilawats/${folder}/info.json`);
            let response = await a.json();

            document.querySelector(".cardContainer").innerHTML = document.querySelector(".cardContainer").innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="Tilawats/${folder}/cover.png" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async items => {
            songs = await getSongs(`Tilawats/${items.currentTarget.dataset.folder}`);
            playMusic(songs[0]);
        }
        )
    }
    )
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
document.querySelector(".volume>img").addEventListener("click", e=>{ 
    if(e.target.src.includes("volume.svg")){
        e.target.src = e.target.src.replace("volume.svg", "mute.svg")
        currentsong.volume = 0;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
    }
    else{
        e.target.src = e.target.src.replace("mute.svg", "volume.svg")
        currentsong.volume = .50;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 50;
    }

})
main();