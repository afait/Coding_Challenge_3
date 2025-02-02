// Task 1 - Product Price Management

let prices = [10, 12, 14, 16, 18];
console.log("Initial prices", prices); // displays the five original prices
prices.push(20); // add price 20 to the array
console.log("Add one new price", prices) // displays the prices with the additional new one
prices.splice(0, 1) // remove price 10 from the array
console.log("Updated prices:", prices) // displays the updated prices

// Task 2 - Modifying Customer Orders

let orders = [50, 80, 100, 60, 150];
console.log("Initial Order Quantities:", orders); // Declarying array order quantities
orders[2] = 105
console.log("Increased Order Quantities:", orders) // Increased thrid order quantity from 100 to 105 and logged the output
let total = orders.reduce((sum, order) => sum + order, 0);
console.log("Total number of orders", total); // Calculated total number of orders
