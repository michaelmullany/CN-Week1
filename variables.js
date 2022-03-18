// // ACTIVITY 1

let name = "Michael";
let age = 36
let favouriteColour = "Blue";

console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`);

name = "Sarah";
age = 45
favouriteColour = "Green";

console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favouriteColour}.`);

// // ACTIVITY 2

let breakfast = "Cornflakes";
let lunch = "Sandwich";
let dinner = "Fish and Chips";

console.log(`Today I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

breakfast = "Toast";
lunch = "Soup";
dinner = "Shepherd's Pie";

console.log(`Tomorrow I will have ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);

// ACTIVITY 3

//Set your birthday - code will calculate if your next birthday is this year or next
let birthdayDay = 12;
let birthdayMonth = 3;

const millisecondsToDays = 1000 * 60 * 60 * 24;

let today = new Date();
let birthday = new Date(today.getFullYear(), birthdayMonth - 1, birthdayDay);
let birthdayAlreadyCelebrated = ((today - birthday) / millisecondsToDays) > 1;
let birthdayGreeting = "Happy Birthday!";

if (birthdayAlreadyCelebrated) {
    birthday.setFullYear(birthday.getFullYear() + 1);
}

let timeToBirthday = birthday - today;
let daysToBirthday = Math.ceil(timeToBirthday / millisecondsToDays);

if (daysToBirthday == 0) {
    console.log(`My next birthday is ${daysToBirthday} days away! ${birthdayGreeting}`);
}
else {
    console.log(`My next birthday is ${daysToBirthday} days away!`);
}

// ACTIVITY 4

// Set values for each space X / O / " "
let space1 = 'X';
let space2 = ' ';
let space3 = 'O';
let space4 = ' ';
let space5 = 'X';
let space6 = ' ';
let space7 = 'O';
let space8 = ' ';
let space9 = 'X';

// Add each row to an array 
// Every 4th is a horizontal bar
// 2nd / 6th / 10th - add string template literals
// All other rows contain verticals only

let grid = [];

for (let i = 0; i < 11; i++)
{
    if (i % 4 == 3)
    {
        grid.push("-----------")
    }
    else if (i == 1)
    {
        grid.push(` ${space1} | ${space2} | ${space3} `);
    }
    else if (i == 5)
    {
        grid.push(` ${space4} | ${space5} | ${space6} `);
    }
    else if (i == 9)
    {
        grid.push(` ${space7} | ${space8} | ${space9} `);
    }
    else
    {
        grid.push("   |   |   ")
    }
}

// Print each line of the array
for (let i = 0; i < 11; i++)
{
    console.log(grid[i]);
}