// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.
async function PlaceOrder(title)
{
    return new Promise((resolve,reject)=>
    {
        let time=1+6*Math.random();
setTimeout(()=>
{
    resolve(`Your ${title} order Placed`);
},time*1000)
    }
)
}
let orders=["Pasta","Zinger Burger","Pizza","Chicken Broast","Lemonade"];
(async function main()
{
for (const order of orders) {
    let p= await PlaceOrder(order);
    console.log(p);
}
})()
