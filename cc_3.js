// Task 1 - Product Price Management

let prices = [10, 12, 14, 16, 18];
console.log("Initial prices", prices); // displays the five original prices
prices.push(20); // add price 20 to the array
console.log("Add one new price", prices) // displays the prices with the additional new one
prices.splice(0, 1) // remove price 10 from the array
console.log("Updated prices:", prices) // displays the updated prices
