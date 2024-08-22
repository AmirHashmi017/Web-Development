let a=prompt("Enter 1st Number: ");
let b=prompt("Enter 2nd Number: ");
if(isNaN(a)||isNaN(b))
{
    throw SyntaxError("Sorry your input is not a number");
}
let sum=parseInt(a)+parseInt(b);
alert(`The sum is ${sum}`);
function main()
{
try{
alert(`The sum is ${sum*x}`);
return true;
}
catch{
    alert("Error aa gaya Bhai");
    return false;
}
//Finally always executes even after function returns.
finally{
    console.log("Files and DB connection is being closed");
}
}
let c=main();