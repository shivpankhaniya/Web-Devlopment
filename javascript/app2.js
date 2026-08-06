console.log("NEW CONTENT")
// Method
// str.trim() remove whitespaces from both side

// let password = prompt("enter your password");
// console.log(password.trim());

// string is immutable because no change can be made to strings


// toUpperCase =  convert string into uppercase , toLowerCase = convert string into lowercase
let country = "india";
console.log(country.toUpperCase());
let name = "USA"
console.log(name.toLowerCase());

// string method with argument 
let ct = "i love mumbai";
console.log(ct.indexOf("m"));
console.log(ct.indexOf("k"));
console.log(ct.indexOf("love"));

// method chainnig add multiple meethod method execution from lef to right
let msg = "    hello     ";
let logo = msg.trim().toUpperCase();
console.log(logo);

// slice = to give as newstring of original string
let animal = "lion";
console.log(animal.slice(3));
console.log(animal.slice(-3));
console.log(animal.slice(0, 3));

// replace = search a value & reeturn replaced value , repeat = return a copy value upto repeat time
let fruit = "apple";
console.log(fruit);
console.log(fruit.replace("apple", "mango"));
console.log(fruit.replace("p", "s"));
console.log(fruit.repeat(6));

// array in js
let newname = ["Rohit", "Shikher", "Virat"];
let info = ["Rohit", 45, "Shikher", 42, "Virat", 18];
let jno = [45, 42, 18];
console.log(newname + "     " + info + "        " + jno + "      " + info.length + "       " + info[2] + info[3]);

// empty array
let amp = [];
console.log(amp);

// array are mutable
let fr = ["apple", "mango", "cherry"];
console.log("before update", fr)
fr[0] = "banana"
console.log("after update", fr);

// array methods 

let cars = ["BMW", "Defender", "Toyota"];
console.log("Before add any type of method:", cars);

// push add element at last in arary
cars.push("Fourtuner");
console.log("After push method:", cars);

// pop remove element from end
cars.pop();
console.log("After pop method:", cars);

// shift delete element from start
cars.shift("Fourtuner");
console.log("After shift method:", cars);

// unshift add element at start
cars.unshift("Fourtuner");
console.log("After unshift method:", cars);


// array methods

let me = ["red", "yellow", "blue"];
console.log(me + "      " + me.indexOf("red") + "       " + me.includes("red"));     

// indexof return index of element
// me.indexOf("red");
// includes return if element exits in array it return it true otherwise false
// me.includes("red");

// concat merge 2 array
let st = ["lords","edan-garden","kotla"]
console.log(st.concat(me));

// reverse use to reverse an array element
console.log(st.reverse());