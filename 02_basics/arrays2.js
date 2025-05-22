let marvel = ["Robert Downey", "Loki", "Miles Morales"];
let dc = ["Flash", "Wonder Woman", "Batman"];

// marvel.push(dc);
// console.log(marvel);

const allHeros = marvel.concat(dc);
// console.log(allHeros);

const allNewHeros = [...marvel, ...dc];
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5], 5, [6, 7, [8, 9]]];
const real_anotherArr = anotherArr.flat(Infinity);
// console.log(real_anotherArr);

const data = Array.from("bhavya");
const newData2 = Array.from({ name: "Bhavya" });
// console.log(data);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
