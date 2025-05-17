// Primitive

// 7 types : Strings, Number, Boolean, null, Symbol, BigInt, undefined

const score = 200;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const BigInteger = 212346287363n;

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["Iron Man", "Thor", "Dr Strange", "Loki"];
let myObj = {
  name: "Bhavya",
  age: 17,
};

const myFunc = function() {
    console.log("Hello World");
}