//Javascript is asynchronous.
const cast=()=>
{
    console.log("Hashmi");
}
const callback=(arg,cast)=>
    {
        console.log(arg);
        cast();
    }
const loadscript=(src,callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  sc.onload=callback("amir",cast);
  document.head.append(sc);
}
loadscript("../Bootstrap/bootstrap-5.3.3-dist/js/bootstrap.min.js", callback);
const changecolor=(element,color)=>
{
    element.style.backgroundColor=color;
}
const changetext=(changecolor)=>
{
    element=document.querySelector(".box");
    element.innerHTML="Amir Hashmi";
    changecolor(element,"red");
}
document.querySelector(".box").addEventListener("click",()=>
{
    changetext(changecolor);
})

