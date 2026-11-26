/*Exercise 2 — Object Value Swap
const prices = { pen: 10, book: 50, bag: 200, eraser: 5 };
Get all prices as an array (Object.values)
Double every price (map) — do not change original object
Find the cheapest item name (hint: Object.keys + reduce)
Check if any item costs more than 150 (some)
Expected: cheapest = "eraser", some = true */

const prices = {
    pen: 10,
    book: 50,
    bag: 200,
    eraser: 5
};
let allPrices = Object.values(prices);
console.log("All Prices:", allPrices);


let doubledPrices = allPrices.map(price => price * 2);
console.log("Doubled Prices:", doubledPrices);


let names = Object.keys(prices);

let cheapest = names.reduce((min, item) => {
    return prices[item] < prices[min] ? item : min;
});

console.log("Cheapest Item:", cheapest);

let expensive = allPrices.some(price => price > 150);
console.log("Any Item Above 150:", expensive);

/*Exercise 3 — Remove Duplicates
const ids = [1, 2, 3, 2, 4, 1, 5, 3, 6];
Remove duplicates using filter + indexOf
Sort the unique array descending
Check if every id is greater than 0
Convert the unique array into a string using join("-")
Expected: "6-5-4-3-2-1", every = true
*/
const ids = [1, 2, 3, 2, 4, 1, 5, 3, 6];

let unique = ids.filter((id, index) => {
    return ids.indexOf(id) === index;
});

console.log("Unique IDs:", unique);


unique.sort((a, b) => b - a);
console.log("Descending Order:", unique);

let check = unique.every(id => id > 0);
console.log("Every ID Greater Than 0:", check);

let result = unique.join("-");
console.log("Joined String:", result);

/*Exercise 4 — Running Total
const sales = [100, 200, 150, 300, 50];
Use reduce to build an array of running totals
Example output: [100, 300, 450, 750, 800]
Find the highest single-day jump (difference between consecutive totals)
Check if every running total is above 50 (every)
Hint: accumulator can be an array, not just a number.
Expected: highest jump = 300, every = true
*/

const sales = [100, 200, 150, 300, 50];


let runningTotal = sales.reduce((acc, sale) => {

    let previous = acc.length > 0 ? acc[acc.length - 1] : 0;

    acc.push(previous + sale);

    return acc;

}, []);

console.log("Running Totals:", runningTotal);



let jumps = [];

for (let i = 1; i < runningTotal.length; i++) {
    jumps.push(runningTotal[i] - runningTotal[i - 1]);
}

let highestJump = Math.max(...jumps);

console.log("Highest Jump:", highestJump);

let check2 = runningTotal.every(total => total > 50);

console.log("Every Total Above 50:", check2);
