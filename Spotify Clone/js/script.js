let currentsong=new Audio();
async function getSongs()
{
let a=await fetch ("http://127.0.0.1:3002/Spotify%20Clone/songs/");
let response= await a.text();
let div=document.createElement("div");
div.innerHTML=response;
let as=div.getElementsByTagName("a");
let songs=[];
for (let element = 0; element < as.length; element++) {
    if(as[element].href.endsWith(".mp3"))
    {
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
currentsong.addEventListener("timeupdate",()=>
{
    console.log(currentsong.currentTime,currentsong.duration);
    document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`;
})
const playMusic=(track,pause = true)=>
{
    if(!pause)
    {
        document.querySelector("#play").src="img/pause.svg";
    }
    let musicsrc = `http://127.0.0.1:3002/Spotify%20Clone/songs/${track}`;
    currentsong.src=musicsrc;
    currentsong.play();
    document.querySelector(".songinfo").innerHTML=decodeURI(track);
    document.querySelector(".songtime").innerHTML=`${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`;
}
async function main()
{
let songs=await getSongs();
playMusic(songs[0]);
let songul=document.querySelector(".songList").getElementsByTagName("ul")[0];
for (const song of songs) {
    songul.innerHTML=songul.innerHTML+`
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
Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    })
})
document.querySelector("#play").addEventListener("click",()=>
{
    if(currentsong.paused)
    {
        currentsong.play();
        document.querySelector("#play").src="img/pause.svg";
    }
    else
    {
        currentsong.pause();
        document.querySelector("#play").src="img/play.svg";
    }
})
}
main();