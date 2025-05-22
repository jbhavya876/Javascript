const Arr = [0, 1, 2, 3, 4, 5];
const heros = ["Robert Downey", "Loki", "Miles Morales"];

const Arr2 = new Array(0, 1, 2, 3, 4);
// console.log(Arr[1]);

// Array Methods
Arr.push(6);
Arr.push(9);
Arr.pop();
// console.log(Arr);

Arr.unshift(9);
// console.log(Arr);

Arr.shift();
// console.log(Arr);

// console.log(Arr.includes(9));
// console.log(Arr.indexOf(3));

const newArr = Arr.join();
// console.log(typeof newArr);
// console.log(typeof Arr);

const myn1 = Arr2.slice(1, 3);
console.log("A ", Arr2);
console.log(myn1);

const myn2 = Arr2.splice(1, 3);
console.log("B ", Arr2);
console.log(myn2);
