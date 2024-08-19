console.log("Amir Hashmi");
let boxes=document.getElementsByClassName("box")
console.log("Amir Shahid Hashmi")
boxes[2].style.backgroundColor="green";
document.getElementById("red").style.backgroundColor="red";
document.querySelector(".box").style.backgroundColor="blue";
let boxesall=document.querySelectorAll(".box");//It returns a node list
//To implement style toa ll we use foreach loop
boxesall.forEach((e)=>
{
    e.style.color="brown";
})
console.log(document.getElementsByTagName("div"));
console.log(boxesall[3].matches("#red"));
console.log(boxesall[3].closest(".container"));
console.log(document.querySelector(".container").contains(boxesall[3]));
