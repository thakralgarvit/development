
// guess a randome number game
const maxnum = prompt("plese enter the max value u want to play with.");

const random = Math.floor(Math.random() * maxnum) +1 ;

let guess = prompt("enter your guess: ");

while(true) {
    if(guess == "quit") {
        console.log("quitting game");
        break;
    }
    if(guess == random){
        console.log("congo u won");
        break;
    } else if(guess < random) {
        console.log("the num is smaller")
    } else if(guess > random) {
        console.log("mum is bigger")
    } 
    if(guess != random) {
        console.log(guess, random);
        guess = prompt(`your guess ${guess} is wrong plese try again.`)
    }
}

// game of dice
let p = prompt("white 'dice' to roll a dice or enter 'exit' to quit");

while(true) {
    if(p === "dice") {
        let dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        p = prompt("white 'dice' to roll a dice or enter 'exit' to quit"); 
    } else if(p === "quit") {
        console.log("quiting the game");
        break;
    } else {
        console.log("invalid output");
        p = prompt("white 'dice' to roll a dice or enter 'exit' to quit"); 
    }
}

//creating a car as a object
let car = {
    name: "BMW",
    model: "x1",
    colour: "matt black"
}
console.log(car.name);


//creata object for a person and then chnage the value and also add a new property
let person = {
    name: "garvit",
    age: 21,
    city: "mumbai"
}
person.city = "new york";
person.country = "united states";