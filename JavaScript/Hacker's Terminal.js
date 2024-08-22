let message=["Initialize hacking","Reading your files","Password files detected","Sending all Passwords and Personal files to server","Cleaning up"];
async function RandomTime()
{
    let time=1+6*Math.random();
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve();
        },time*1000)
    }
)
}
let tinterval=setInterval(()=>
{
    let t=document.body.lastElementChild;
    let ttext=t.innerHTML.toString();
    let last3=ttext.slice(ttext.length-3,ttext.length);
    if(last3=="...")
    {
        t.innerHTML=ttext.slice(0,ttext.length-3);
    }
    else{
        t.innerHTML=t.innerHTML+".";
    }
},200)
function PrintScreen(text)
{
    
    let newelement=document.createElement("div");
    newelement.innerHTML=text;
    document.body.append(newelement);
}
async function Hacker()
{
    
        for (const m of message) {
            let timing=await RandomTime();
            PrintScreen(m);
        }
        await RandomTime();
        clearInterval(tinterval);
}
Hacker();
