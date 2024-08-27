async function getSongs()
{
let a=await fetch ("http://127.0.0.1:3000/Spotify%20Clone/songs/");
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
const playMusic=(track)=>
{
    let musicsrc = `http://127.0.0.1:3000/Spotify%20Clone/songs/${track}`;
    var audio = new Audio(musicsrc);
    audio.play();
}
async function main()
{
let songs=await getSongs();
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

}
main();