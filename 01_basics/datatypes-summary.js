// There are two methods to access data which is stored in memory which are such as

//Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
//Java script is a dynamically typed language

const score = 100 
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 787693301092004n


// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Thor", "Loki", "Iron Man"]
let myObj = {
    name: "Ahmad",
    age: 20,
    hobby: "Nothing",
}

function myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);

