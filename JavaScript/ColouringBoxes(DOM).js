function RandomColor(){
    let val1 =Math.random()* 255;
    let val2 =Math.random()* 255;
    let val3 =Math.random()* 255;
    return `rgb(${val1}, ${val2}, ${val3})`
}
let boxes=document.querySelectorAll(".box");
boxes.forEach(element => {
    element.style.backgroundColor=RandomColor();
    element.style.color=RandomColor();
});