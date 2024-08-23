// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function ArraySum(arr)
{
    let sum=0;
    for (const num of arr) {
        if(num<0)
        {
            return sum;
        }
        sum+=num;
    }
    return sum;
}
console.log(ArraySum([3,4,3,5,6,9,-10,1,4,5]));