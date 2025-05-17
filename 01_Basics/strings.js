const name = "Bhavya";
const repoCount = 10;

console.log(`Hey, ${name} this side and my repo count is ${repoCount}`);

const gameName = new String('bhavya-jn-fndr');
console.log(gameName[0]);
console.log(gameName.substring(0,4));
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.slice(-6,4);
console.log(newString);

const anotherStr = "    bhav   ";
console.log(anotherStr.trim());

let url = "https://Lightning%20Mac/Speed"
console.log(url.replace('%20', "_"));
console.log(url.includes('Speed'));

console.log(gameName.split('-'));