console.log("GRID ACTIVITY\n");

const grid = [];

for (let i = 0; i < 11; i++)
{
    if (i % 4 == 3)
    {
        grid.push("-----------")
    }
    else
    {
        grid.push("   |   |   ")
    }
}

for (let i = 0; i < 11; i++)
{
    console.log(grid[i]);
}

// Extra Activity 1: Can you log me, three lines to the console. First line should tell me your name. Second line should tell me your age. Third line should tell me your star sign. 
console.log("\nINTRODUCTION\n")
const fullname = "Michael Mullany"
const age = "36"
const starsign = "Pisces"

console.log(`My name is ${fullname}`);
console.log(`I am ${age} years old`);
console.log(`I am a ${starsign}`);

// Extra Activity 2: Research another String Method and Number Method that you can show me tomorrow. This can be anything you like but please have a piece of working code that demonstrates it. 

console.log("\nINVESTIGATE METHODS\n")
// String Method: slice
const str = "I will take a slice of this string";
console.log(`Take a slice out of the string "${str}": ${str.slice(14,19)}`);

// String Method: concat
const str1 = "I will concatenate";
const str2 = "these two strings";
console.log(str1.concat(" ", str2));

// Number Method: isInteger
console.log("Is 3 an integer? " + Number.isInteger(3));
console.log("Is Pi an integer? " + Number.isInteger(Math.PI));

// Number Method: toPrecision
let exampleNumber = 3.141592653589793;
console.log(exampleNumber.toPrecision(5)); 

// Number Method: max
const num1 = 50;
const num2 = 100;

console.log(`\nMAXIMUM:`);
console.log("Maximum of " + num1 + " and 75 is: " + Math.max(num1, 75));
console.log("Maximum of " + num2 + " and 75 is: " + Math.max(num2, 75));

// Number Method: min
console.log(`\nMINIMUM:`);
console.log("Minimum of " + num1 + " and 75 is: " + Math.min(num1, 75));
console.log("Minimum of " + num2 + " and 75 is: " + Math.min(num2, 75));