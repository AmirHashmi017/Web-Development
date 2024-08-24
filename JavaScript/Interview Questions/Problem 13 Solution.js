// 13. The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.
//Method 1
function calculateBill(Products)
{
    let totalcost=0;
    for (const product of Products) {
        totalcost+=(product.price*product.quantity);
    }
    return totalcost;
}
class Product{
    constructor(name,price,quantity)
    {
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}
let products=[];
products.push(new Product("Shirt",1200,3));
products.push(new Product("Pant",1600,2));
products.push(new Product("Jacket",3200,2));
products.push(new Product("Shoes",2200,1));
products.push(new Product("Perfume",1500,1));
console.log(`Your Total Bill is Rs.${calculateBill(products)} only`);
//Method 2
function calculateTotal(products) {
    let totalCost = 0;
    for (let product of products) {
        totalCost += product.price * product.quantity;
    }
    return totalCost;
}

const shoppingCart = [
    { price: 10.99, quantity: 2 },
    { price: 5.49, quantity: 1 },
    { price: 7.99, quantity: 3 }
];

console.log(calculateTotal(shoppingCart));
