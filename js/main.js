// first task
let name = prompt("What is your name ?");
let surname = prompt("What is your surname ?");
let nationality = prompt("What is your nationality ?");
alert(name + " " + surname + " " + nationality);

// second task
let number;
do {
    number = prompt("Enter a five-digit number");
} while(number < 10000 || number > 99999)
let result = number.split("");
alert(result.join(" "));
