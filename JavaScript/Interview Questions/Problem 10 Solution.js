// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.
async function CoffeeBrewing(coffeetype)
{
    return new Promise((resolve,reject)=>
    {
        let time=1+6*Math.random();
setTimeout(()=>
{
    resolve(`Your ${coffeetype} coffee brewed`);
},time*1000)
    }
)
}
let orders=["Espresso","Cappuccino","Latte","Americano","Mocha"];
(async function main()
{
for (const order of orders) {
    let p= await CoffeeBrewing(order);
    console.log(p);
}
})()