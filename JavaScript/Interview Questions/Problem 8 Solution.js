// 8. Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function ArrayMultiplier(arr) {
    for (const num of arr) {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
        console.log(result); 
    }
}
ArrayMultiplier([1, 3, 5, 7, 9]);

