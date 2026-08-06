console.log("Hello World!");

let a = 30;
let b = 45;
sum = a + b;

console.log("sum of two number" + sum);

let meggi = 100;
let pasta = 50;

let total = "Total price is " + (meggi + pasta) + " " + "Rupees.";
let Total = (`Total price is ${meggi + pasta} Rupees.`);

console.log(total);
console.log(Total);

// Operator
let A = 15;
let B = 6;

//Arithematic Operator
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(A ** B);
console.log(A % B);
console.log(A / B);

//Unary Operator
console.log(A++);
console.log(++A);
console.log(A--);
console.log(--A);

//Assignment Operator  
A = B;
console.log(A);
A += B;
console.log(A);
A -= B;
console.log(A);
A *= B;
console.log(A);
A /= B;
console.log(A);
A **= B;
console.log(A);
A %= B;
console.log(A);

// Compariosn Operator
console.log(A < B);  // true
console.log(A > B);  // false
console.log(A != B); // true
console.log(A <= B); // true
console.log(A >= B); // false

// Logical Operator
let M = 82
if (M > 75 && M > 65) {
    console.log("Pass")
    // Logical AND Operator
}
if (M > 75 || M < 65) {
    console.log("Pass")
    // Logical OR Operator
}

if (!(M < 75)) {
    console.log("Pass")
    // Logical NOt Operator
}


// if condition
let color = "Red";
if (color === "Red") {
    console.log("stop")
}
if (color === "yellow") {
    console.log("slow down")
}
if (color === "green") {
    console.log("go")
}

// else if condition
let age = 18;
if (age >= 18) {
    console.log("yor can vote")
} else if (age < 18) {
    console.log("you can't vote")
}

// Else condition

let Age = 15;
if (Age >= 18) {
    console.log("yo can vote")

} else {
    console.log("you can't vote")

}

let size = "XL";
if (size === "XL") {
    console.log("price is RS .250")

} else if (size === "L") {
    console.log("price is RS .200")
}
else if (size === "M") {
    console.log("price is RS .100")
}
else if (size === "S") {
    console.log("price is RS .50")
}
else {
    console.log("Popcorn is not available")
}

// Nested is else (write if-else inside is-else it's call nested if else) 
let mark = 51;
if (mark >= 42) {
    console.log("pass");
    if (mark >= 80) {
        console.log("Grade is A+");
    }
    else {
        console.log("Grade is A");
    }
}
else {
    console.log("fail");
}


// let AGE = prompt("enter your age:");
// if (AGE >= 18) {
//     console.log("you can vote");

// } else {
//     console.log("you can't vote");

// } 

// let str = prompt("Enter a string");
// if (str.length > 3 && str[0] === 'a') {
//     console.log("Good Stirng");

// } else {
//     console.log("NOt Good Stirng");
// }



// Switch Statement

let COLOR = "Red"
switch (COLOR) {
    case "Red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("signal not work");
        break;
}

let day = 1;
switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("firday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("wrong input!");
        break;
}

// alert("Somethis is wrong")
// alert show alert box

// prompt("enter your enno ")
// // prompt use to get input from user




let NUM = 100;
if (NUM % 10) {
    console.log("good");
} else {
    console.log("bad");
}

// let NAME = prompt("enter your full name");
// let AGE = prompt("enter your age");
// alert(`${NAME} is ${AGE} years old`);



let month = 1;
switch (month) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, Decembe");
        break;
    default:
        console.log("wrong input!");
        break;
}


let STR = "apple"
if (STR[0] == 'a' || STR[0] == 'A' && (STR.length > 5)) {
    console.log("golden");
} else {
    console.log("not golden");
}


let X = 10;
let Y = 20;
let Z = 30;
if (X > Y) {
    if (X > Z) {
        console.log("X is largest")

    } else {
        console.log("Z is largest")
    }
} else {
    if (Y > Z) {
        console.log("Y is largest")

    } else {
        console.log("Z is largest")
    }
}

let num1 = 32;
let num2 = 47852
if ((num1 % 10) == (num2 % 10)) {
    console.log("both last digit is same", num1 % 10);
} else {
    console.log("both last digit is not same");
}
