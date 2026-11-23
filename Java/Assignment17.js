let product={
   laptop : 85000,
    Phone: 35000,
    Headphones: 3000
};
let names = Object.keys(product);
console.log(names);
let prices = Object.values(product);
console.log(Object.values(product));

let total = prices.reduce((sum,price) =>
  sum + price,0
)
console.log(total);
 let newproducts;
 for(let[name,price] of Object.entries(product)){
    if(price<5000)
    {
        newproducts[name] = price;
    }
 }
 console.log("Products below 5000: ",newproducts);