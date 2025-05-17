let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createdDate = new Date(2025, 0, 14, 5, 3);
let myCreatedDate = new Date("01-14-2025");
// console.log(createdDate.toLocaleString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
