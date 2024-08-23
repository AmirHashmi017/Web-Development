async function RandomTime()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve();
        },1000)
    }
)
}
function sum(a,b,c)
{
    return a+b+c;
}
//IIFE function it will run without call as it is defined
(async function main()
{
    let a=await RandomTime();
    console.log("a");
    let b=await RandomTime();
    console.log("b");
//Destructuring
let[x,y]=[5,7];
console.log(x,y);
let[p,q,...rest]=[1,2,3,4,5,6];
console.log(p,q,rest);
let obj={
    c:10,
    d:20,
    e:30
}
let {c,e}=obj;
console.log(c,e);
let arr=[1,3,6];
console.log(sum(arr[0],arr[1],arr[2]));
//This Spread Operator also gives same output as above
console.log(sum(...arr));
})()
