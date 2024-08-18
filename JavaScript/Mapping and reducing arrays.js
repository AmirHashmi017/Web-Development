let arr=[1,13,5,7,11];
let newArr=arr.map((e)=>
{
    return e**2;
})
console.log(newArr);
console.log(arr.filter(e=>e>7));
function Add(a,b)
{
    return a+b;
}
console.log(arr.reduce(Add));
console.log(Array.from("9090"));
