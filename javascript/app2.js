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
let st = ["lords", "edan-garden", "kotla"]
console.log(st.concat(me));

// reverse use to reverse an array element
console.log(st.reverse());

// slices method use to copies portion of an array
console.log(cars.slice(2));

// splices method use for remove/replace/& adda new element  syntax#(start,deletecount,item0....itemN)
let kk = ["mango", "apple", "orange", "cherry", "pinaple", "greps"]
console.log(kk.splice(0, 0, "banana", "watermelon"));
console.log(kk.splice(2));
console.log(kk.splice(0, 0, "banana", "watermelon"));


// sort method is use to sort an array element in ascending or decending order
let jj = ["mango", "apple", "orange", "cherry", "pinaple", "greps"]
console.log(jj.sort());

// constant array = don't change value in array or method
const aa = [1, 2, 3, 4, 5, 6];
console.log(aa);
// aa = [7,8,9];
// console.log(aa);
// this thing not happen because const not allow change element in array 

// nested array to crete array inside the array
let arr = [['X', 'NULL', 'O'], ['NULL', 'X', 'NULL'], ['O', 'NULL', 'X']];
console.log(arr);

// access 0 array & change it value
console.log(arr[0]);
console.log(arr[0][1] = 'O')
console.log(arr)

let tt = [64, "hello", 99, 'virat'];
let nn = 64;

if (tt.indexOf(nn) != 1) {
    console.log("element exits in array")

} else {
    console.log("element not exits in array")

}

let gg = [7, 9, 0, -2];
let n = 3;
let ans = gg.slice(0, n);
console.log(ans);


let ll = [7, 9, 0, -2];
let m = 3;
let an = gg.slice(ll.length - n);
console.log(an);

// let ghd = prompt("enter your string");
// if (ghd.length == 0) {
//     console.log("string is empty")

// } else {
//     console.log("string is not empty")

// }

let nh = "Hello world";
let idx = 3
if (nh[idx] == nh[idx].toLowerCase()) {
    console.log("ch is lowercse");

} else {
    console.log("ch is not lower case");

}

// let sts = prompt("enter a string:")
// console.log(`before empty spaces: ${sts}`);
// console.log(`after remove empty spaces: ${sts.trim()}`);