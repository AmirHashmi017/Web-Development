let num=5;
//Factorial Calculator using For loop and reduce function.
let arr=[];
while(num>1)
{
    arr.push(num);
    num--;
}
function factorialcalculator(a,b)
{
    return a*b;
}
console.log("The Factorial is: "+arr.reduce(factorialcalculator));
