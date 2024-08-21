document.querySelector(".child").addEventListener("click", (e) => {
    e.stopPropagation();
    alert("child was clicked");
})
document.querySelector(".childcontainer").addEventListener("click", () => {
    alert("child container was clicked");
})
document.querySelector(".container").addEventListener("click", () => {
    alert("container was clicked");
    document.querySelector(".container").classList.toggle("Yellow")

})
function RandomColor()
{
    let value1=Math.random()*255;
    let value2=Math.random()*255;
    let value3=Math.random()*255;
    return `rgb(${value1},${value2},${value3})`;
}

let a=setInterval(()=>
{
    document.querySelector(".childcontainer").style.backgroundColor=RandomColor();

},1000)
console.log(a);
// clearInterval(1);
//Timeout do it once while setinterval do it repititively.
let b=setTimeout(()=>
{
    document.querySelector(".child").style.backgroundColor="purple";
},3000
)
// clearTimeout(2);