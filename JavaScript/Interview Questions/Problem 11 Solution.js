// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
function SearchFilters(products,filter)
{
    let filtered=[]
for (const product of products) {
    if(product.toLowerCase().includes(filter.toLowerCase()))
    {
filtered.push(product);
    }
}
return filtered;
}
let products=["Pasta","Zinger Burger","Pizza","Chicken pakistan Broast","Lemonade","pAkora"];
console.log(SearchFilters(products,"pa").join(" , "));