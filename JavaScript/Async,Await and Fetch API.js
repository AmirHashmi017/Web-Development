async function LoadData()
{
    let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await x.json();
    return data;
}

async function main()
{
console.log("Amir Hashmi");
console.log("Code Running");
console.log("Data Loading...");
let data=await LoadData();
console.log(data);
console.log("Data is Ready.");
console.log("Now you can use data");

}
main();

async function GetData()
{
return new Promise((resolve,reject)=>
{
    setTimeout(()=>{
    resolve("455");
},5000)
})
}
//When the promise will resolve means when the data is loaded then the next code will run.
data2=GetData();
data2.then(()=>
{
console.log(data2);
    console.log("Data2 is Ready.");
    console.log("Now you can use data2");
    
})
