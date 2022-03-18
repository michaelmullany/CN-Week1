// ACTIVITY 1
console.log("\nACTIVITY 1\n")

// Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.

let age = 21;
let country = "USA"

if (age > 17 && country == "UK") {
    console.log("Yes I can serve you");
} else if (age > 20 && country == "USA") {
    console.log("Yes I can serve you");
} else {
    console.log("You aren’t old enough");
}

// ACTIVITY 2
console.log("\nACTIVITY 2\n")

let pizzaTopping = "Onion";

switch (pizzaTopping) {
    case "Prawn":
    case "Anchovy":
    case "Tuna":
        console.log(`${pizzaTopping} is an important ingredient for my pizza.`);
        break;
    case "Sweetcorn":
    case "Mushroom":
        console.log(`I don’t mind having ${pizzaTopping} on my pizza.`);
        break;
    default:
        console.log(`${pizzaTopping} should not be on a pizza.`);
}

// ACTIVITY 3
console.log("\nACTIVITY 3\n")

// Create a variable called password.
// Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

let password = "i4m_A-p*ssW0rd*";
if (password.length < 8) {
    console.log("Password is too short. Please use at least 8 characters.");
} else {
    console.log(`Your password is ${password}`);
}

// ACTIVITY 4
console.log("\nACTIVITY 4\n")

for (let num = 1; num < 32; num++) {
    if (num % 3 == 0 || num % 5 == 0) {
        console.log(`${num} is divisible by 3 or 5`);
    } else {
        console.log(`${num} is divisible by neither 3 nor 5`);
    }
}

// ACTIVITY 5
console.log("\nACTIVITY 5\n")

//Create a variable called num.
//If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.
for (let num = 0; num < 32; num++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizz buzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0) {
        console.log("fizz");
    } else {
        console.log(num);
    }
}

// ACTIVITY 6
console.log("\nACTIVITY 6\n")

//Create a variable called num.
let num = 1234321;
//Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).
let numAsString = num.toString();
let numReverse = numAsString.split("").reverse().join("");
if (numAsString === numReverse) {
    console.log(`${num} is a Palindrome!`);
} else {
    console.log(`${num} is NOT a Palindrome!`);
}


// ACTIVITY 7
console.log("\nACTIVITY 7\n")

//Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
//Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 7;
let placeOfWork = "Manchester"
let townOfHome = "Preston"
let leadingZero = "";

for (let time = 0; time < 24; time++) {

    if (time < 10) {
        leadingZero = "0";
    } else {
        leadingZero = "";
    }

    if (time <= 7) {
        console.log(`${leadingZero}${time}:00 - I am at home in ${townOfHome}`);
    } else if (time == 8) {
        console.log(`${leadingZero}${time}:00 - I am commuting from ${townOfHome} to ${placeOfWork}`);
    } else if (time <= 17) {
        console.log(`${leadingZero}${time}:00 - I am at work in ${placeOfWork}`);
    } else if (time == 18) {
        console.log(`${leadingZero}${time}:00 - I am commuting from ${placeOfWork} to ${townOfHome}`);
    } else {
        console.log(`${leadingZero}${time}:00 - I am at home in ${townOfHome}`);
    }
}

// ACTIVITY 8
console.log("\nACTIVITY 8\n")

// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.
let exampleString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let lastVowelIndex = -1; // Set as -1, search from the back and overwrite if we find a vowel. If we don't find a vowel at all, then the value should remain as -1

for (let i = exampleString.length - 1; i >= 0; i--) {
    let letterToCheck = exampleString[i].toLowerCase(); // Set to lower case so we don't have to check "A" and "a"
    if (letterToCheck === 'a' || letterToCheck === 'e' || letterToCheck === 'i' || letterToCheck === 'o' || letterToCheck === 'u') {
        lastVowelIndex = i;
        break; // We have found the final vowel, and don't need to search any further
    }
}

if (lastVowelIndex < 0) {
    console.log("There are no vowels in the string.");    
} else {
    console.log(`The last vowel is at index ${lastVowelIndex}`);
}

// ACTIVITY 9
console.log("\nACTIVITY 9\n")

// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

let word = "snail";
if (word[0].toLowerCase() === word[word.length - 1].toLowerCase()) {
    console.log(true);
} else {
    console.log(false);
}

// ACTIVITY 10
console.log("\nACTIVITY 10\n")

let num1 = 3;
let num2 = 8;
let sum = num1 + num2;

if (sum % 2 == 0) {
    console.log(sum);
} else {
    console.log(num1 * num2);
}
