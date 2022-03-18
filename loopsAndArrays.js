// LOOPS
// ACTIVITY 1
console.log("\nLoops - Activity 1\n");

let favouriteSongs = [
    "White Christmas",
    "Fairytale of New York",
    "Jingle Bells"
];

console.log(favouriteSongs);

favouriteSongs.push("Where did my Christmas Tree go?");
favouriteSongs.push("Mary's Boy Child");

console.log(favouriteSongs);

favouriteSongs.pop();

console.log(favouriteSongs);

// ACTIVITY 2
console.log("\nLoops - Activity 2\n");

// Demonstrate .shift()
// Shift removes and returns the first element of an array
console.log(`Before using .shift(), the length of the array is ${favouriteSongs.length}`);
console.log(favouriteSongs);

let firstSong = favouriteSongs.shift();

console.log(`I have used .shift() to remove the first element from the array, which was: ${firstSong}`);
console.log(favouriteSongs);
console.log(`The length of the array is now: ${favouriteSongs.length}`);

// ARRAYS
// ACTIVITY 1
console.log("\nArrays - Activity 1\n");

let favFilms = [
    "Team America",
    "Die Hard",
    "Lord of the Rings",
    "Jungle Book",
    "Lion King"
];

console.log(favFilms);

favFilms.push("Anchorman");
favFilms.push("The Hangover");

console.log("My favourite films are: ");
for (let i = 0; i < favFilms.length; i++) {
    console.log(favFilms[i]);
}

// ACTIVITY 2
console.log("\nArrays - Activity 2\n");

for (let i = 0; i < 6; i++) {
    console.log(Math.ceil(Math.random()*50));
}

// ACTIVITY 3
console.log("\nArrays - Activity 3\n");

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

for (let i = 9; i >= 0; i--) {
    console.log(i);
}

// ACTIVITY 4
console.log("\nArrays - Activity 4\n");

let films = [
    "Rocky",
    "Jurassic Park",
    "Ghostbusters",
    "Harry Potter"
]

for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
    if (i == 2) {
        if (films[i] == "Ghostbusters") {
            console.log("Yay it's Ghostbusters");
        } else {
            console.log("Boo! We want Ghostbusters!")
        }
    }
}

// ACTIVITY 5
console.log("\nArrays - Activity 5\n");

for (let i = 0; i < 6; i++) {
    let randomNum = Math.ceil(Math.random() * 30)
    if (randomNum % 7 == 0) {
        console.log(`${randomNum} is divisible by 7!`);
    } else {
        console.log(`${randomNum} is NOT divisible by 7!`);
    }
}

// ACTIVITY 6
console.log("\nArrays - Activity 6\n");

let bobsFollowers = [
    "Amy",
    "Brad",
    "Chris",
    "Daisy"
];

let hannahsFollowers = [
    "Amy",
    "Breanna",
    "Chad",
    "Daisy"
];

mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++ ) {
        if (bobsFollowers[i] == hannahsFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

console.log(mutualFollowers);

// Activity 7

// For - Runs a known number of iterations, e.g. iterates through every item in an array
// While - Runs an unknown number of iterations (doesn't need to run once) e.g. check how many times a number is divisible by 2
// Do While - Runs an unknown number of times, and runs at least once e.g. draw lottery numbers, keep rolling over until somebody wins
