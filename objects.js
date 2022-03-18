// ACTIVITY 1 -------------------------

// const person = {
//     name: "Michael",
//     age: 36,
//     favouriteSongs: [
//         "Wonderwall",
//         "Don't Look Back in Anger",
//         "Cigarettes and Alcohol"
//     ],
//     sayHi() {
//         return `Hello my name is ${this.name}`;
//     }
// };

// console.log(person.sayHi());

// ACTIVITY 1 -------------------------

// ACTIVITY 2 -------------------------

// const pet = {
//     "name": "Pochi",
//     "typeOfPet": "Dog",
//     "age": 5,
//     "colour": "Red",
//     eat() {
//         return `${this.name} is eating.`;
//     },
//     drink() {
//         return `${this.name} is drinking.`;
//     }
// }

// console.log(pet.name);
// console.log(pet.typeOfPet);
// console.log(pet.age);
// console.log(pet.colour);
// console.log(pet.eat());
// console.log(pet.drink());

// ACTIVITY 2 -------------------------

// ACTIVITY 3 -------------------------

const coffeeShop = {
    branch: "Scone with the Wind",
    drinks: [
        ["Americano", 2.6],
        ["Tea", 2],
        ["Mocha", 3],
        ["Latte", 2.8],
    ],
    food: [
        ["Panini", 5],
        ["Cake", 2.8],
        ["Croissant", 2],
        ["Soup", 2.5]
    ],
    // Doing largely the same thing for drinksOrdered and foodOrdered, but referencing a different "menu", 
    // so create another method that processes either food or drinks, and let drinksOrdered / foodOrdered tell it which menu to use
    drinksOrdered(order) {
        return this.processOrder(order, this.drinks, "drinks");
    },
    foodOrdered(order) {
        return this.processOrder(order, this.food, "food");
    },
    processOrder(order, menu, type) {
        // Concatenate to the string, to show items that have been successfully ordered
        let receipt = `Welcome to "${this.branch}".\nYour ${type} order is: `;
        // Keep a running total of the cost
        let totalCost = 0;
        // Loop through all items on the order
        for (let i = 0; i < order.length; i++) {
            // Check if each item is on the menu by looping through each item on the menu
            for (let j = 0; j < menu.length; j++) {
                // If the item is on the menu then add it to the receipt and add the cost to the running total
                if (order[i] == menu[j][0]) {
                    receipt += `\n  ${menu[j][0]} for £${menu[j][1].toFixed(2)}`;
                    totalCost += menu[j][1]
                }
            }
        }
        // Add the final cost to the recipt
        receipt += `\nThe total cost is £${totalCost.toFixed(2)}.`;
        return receipt;
    }
}

let drinksOrder = ["Americano", "Tea",  "Tea",  "Latte", "Mocha", "Latte", "Water"];
let foodOrder = ["Panini", "Panini",  "Soup",  "Cake", "Croissant", "Croissant", "Potato"];
console.log(coffeeShop.drinksOrdered(drinksOrder));
console.log(coffeeShop.foodOrdered(foodOrder));

// ACTIVITY 3 -------------------------