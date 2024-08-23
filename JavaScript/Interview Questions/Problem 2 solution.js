// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function DoubleArray(arr)
{
    let doublearr=[];
for(let i=0;i<arr.length;i++)
{
    try{
if(arr[i]!=arr[i-1])
    {
doublearr.push(arr[i]*2);
    }
    else{
        doublearr.push(arr[i]);  
    }
}
catch{
    doublearr.push(arr[i]);
}
}
return doublearr;
}
console.log(DoubleArray([1,3,3,5,7,7,7,7,9]));