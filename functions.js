// ACTIVITY 1

// const factorial = n => {
//     if (( n === 0 || n === 1 )) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// ACTIVITY 2

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Order number ${orderCount}: Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }

// takeOrder("ham","pineapple");
// takeOrder("tuna","anchovies");
// takeOrder("pepperoni","peppers");

// ACTIVITY 3
// const pinOnAccount = "1234";
// let balance = 100;

// const withdraw = (pinAttempt, amountToWithdraw) => {

//         if (pinAttempt == pinOnAccount && amountToWithdraw <= balance) {
//                 console.log(`You have withdrawn £${amountToWithdraw}.`);
//                 balance -= amountToWithdraw;
//         } else {
//             console.log(`Transaction Failed.`)
//         }
// }

// withdraw("9876", 200);
// withdraw("1234", 200);
// withdraw("9876", 50);
// withdraw("1234", 50);

// // ACTIVITY 3B - 
// //EXTENDED TO INCLUDE: 
// // - NUMBER OF TIMES THE PIN CAN BE INCORRECT BEFORE THE ACCOUNT LOCKS
// // - SPECIFIC FEEDBACK ON FAILED TRANSACTION

const pinOnAccount = "1234";
const maxPinAttempts = 3;
let pinAttemptsRemaining = maxPinAttempts;
let currentBalance = 100;

const withdraw = (pinAttempt, amountToWithdraw) => {

    if (pinAttemptsRemaining > 0) {
        if (pinAttempt == pinOnAccount) {
            pinAttemptsRemaining = maxPinAttempts; // Reset remaining attempts when PIN entered is correct
            if (amountToWithdraw <= currentBalance) {
                currentBalance -= amountToWithdraw;
                console.log(`You have withdrawn £${amountToWithdraw}. Your balance is now £${currentBalance}.`)
            } else {
                console.log(`Insufficient funds - Requested £${amountToWithdraw}, you can only withdraw up to £${currentBalance}.`)
            }
        } else {
            pinAttemptsRemaining--;
            if (pinAttemptsRemaining > 0) {
                console.log(`Incorrect PIN - Please try again. You have ${pinAttemptsRemaining} attempts remaining.`);
            } else {
                console.log(`Incorrect PIN - Your account has been locked.`);
            }
        }
    } else {
        console.log("Your account has been locked because you have entered the wrong PIN too many times.")
    }
}

// // Test different combinations
// withdraw("9876", 200);
// withdraw("9876", 200);
// withdraw("1234", 200);
// withdraw("1234", 20);
// withdraw("1234", 20);
// withdraw("1234", 70);
// withdraw("9876", 20);
// withdraw("9876", 20);
// withdraw("9876", 20);
// withdraw("9876", 20);
// withdraw("1234", 20);