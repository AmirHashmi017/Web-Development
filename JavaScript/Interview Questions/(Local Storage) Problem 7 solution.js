// 7. The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.
// let myname=prompt("Enter Your Name");
localStorage.setItem("name","amir");
if(localStorage.getItem("name"))
{
    let a=localStorage.getItem("name");
// document.write("Welcome"+a)
}
else{
    // document.write("Welcome");
}
let friends=
{
    one:"amir",
    two:"ahmed",
    three:"umer"
}
localStorage.setItem("Guys",JSON.stringify(friends));
console.log(localStorage.getItem("Guys"))
console.log(JSON.parse(localStorage.getItem("Guys")));
// function SaveNoteToLocalStorage(note)
// {
//     localStorage.setItem("Note",note);
// }
// document.querySelector(".Button").addEventListener("click",()=>
// {
//     let note=prompt("Enter your Note: ");
//     SaveNoteToLocalStorage(note);
//     document.querySelector(".notes").innerHTML=localStorage.getItem("Note");
// })
// if(localStorage.getItem("Note"))
// {
//     document.querySelector(".notes").innerHTML=localStorage.getItem("Note");
// }
// Function to save notes array to localStorage
function SaveNotesToLocalStorage(note)
{
    let Notes=GetNotes();
    Notes.push(note);
    localStorage.setItem("Notes",JSON.stringify(Notes));
}
function GetNotes(){
    let allnotes=localStorage.getItem("Notes");
    if(allnotes)
    {
        return JSON.parse(allnotes);
    }
    else{
        return [];
    }
}
function DisplayNotes(notes)
{
    document.querySelector(".notes").innerHTML=notes.map(text=>
`<div>${text}<div>`
    ).join("");
}
document.querySelector(".Button").addEventListener("click",()=>
    {
        let note=prompt("Enter your Note: ");
        SaveNotesToLocalStorage(note);
        let notes=GetNotes();
        if(notes.length>0)
        DisplayNotes(notes);
    })
    let notes=GetNotes();
    if(notes.length>0)
        DisplayNotes(notes);

