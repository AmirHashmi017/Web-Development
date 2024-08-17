let a=prompt("Enter 1st number: ");
let b=prompt("Enter 2nd number: ");
let c=prompt("Enter operator(+,-,*,/): ");
let r=Math.random();
let reverse=
{
    '+':'-',
    "-":"*",
    "*":"/"
}
if(r>0.1)
{
    alert(`Value is ${eval(`${a} ${c} ${b}`)}`);
}
else{ 
c=reverse[c];
alert(`Value is ${eval(`${a} ${c} ${b}`)}`);
}