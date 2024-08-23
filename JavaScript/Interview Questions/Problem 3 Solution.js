// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
function ReverseString(inputstr)
{
let reverse=inputstr.split('').reverse().join('');
return inputstr+reverse;
}
console.log(ReverseString("AmirHashmi"));