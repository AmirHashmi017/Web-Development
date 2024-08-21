// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button=document.getElementById("btn");
button.addEventListener("click",()=>
{
    document.querySelector(".box").innerHTML="I am amir";
})
button.addEventListener("dblclick",()=>
    {
        document.querySelector(".box").innerHTML="I am amir Hashmi";
    })
button.addEventListener("contextmenu",()=>
{
    alert("Don't right click");
})
document.addEventListener("keydown",()=>
{
    alert("Key is Pressed");
})