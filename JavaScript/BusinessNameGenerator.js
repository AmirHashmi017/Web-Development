let a=Math.random()
let first,second,third;
if(a<=0.33)
{
first="Top";
}
else if(a>0.33&&a<=0.66)
{
    first="Classic";
}
else if(a>0.66&&a<=0.99)
{
    first="HighOctane";
}
let b=Math.random()
if(b<=0.33)
{
second="Clothing";
}
else if(b>0.33&&b<=0.66)
{
    second="TaskLyft";
}
else if(b>0.66&&b<=0.99)
{
    second="Ustadam";
}
let c=Math.random()
if(c<=0.33)
{
third="Brand";
}
else if(c>0.33&&c<=0.66)
{
    third="Hub";
}
else if(c>0.66&&c<=0.99)
{
    third="Centre";
}
console.log(`${first} ${second} ${third}`);