//string concept in js 

// const gameName = new String("Sudhansu-si");

// console.log(gameName.length); // Output: 8
// console.log(gameName.charAt(2)); // Output: "d"
// console.log(gameName.toUpperCase()); 
// console.log(gameName.indexOf('d')); 
// this is string all methods

// const newString = gameName.substring(0, 4); not giving negative value in substring method
// console.log(newString); 

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

// const str1 = "   Hello   ";
// console.log(str1.trim()); // should work on the leading and trailing spaces and return "Hello"

// const url = "https://www.youtube.com/ watch?v=abc123";

// console.log(url.replace(" ", "")); // should asked and changes also
// const url = "https://www.youtube.com/ watch?v=abc123";
// console.log(url.includes("youtube")); 

// const str1 = "Hello_si";
// console.log(str1.split("_")); // should split the string into an array of characters


// Number and maths in js 

// const Score = 4001;
// console.log(Score); // Output: 4001
// const balance = new Number(100);
// console.log(balance); // Output: [Number: 100]


// console.log(balance.toString().length); // Output: 3
// console.log(balance.toFixed(2)); // Output: "100.00"

// const otherNumber = 3.14159;
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


//++++++ Maths ++++++ // comes by default with js

// const hundreds = 1000000;
// console.log(Math);
// console.log(Math.abs(-5)); // Output: 5
// console.log(Math.round(3.7)); // Output: 4


const myarray = [0,1,2,3,4,5];
const myHeroes = ["Ironman", "Spiderman", "Hulk", "Thor", "Captain America"];
const myarray2 = new Array(1,2,3,4,5);
console.log(myarray[0]); 
console.log(myHeroes[2]); 
console.log(myarray2[4]); 


//Array methods in js 
// myarray.push(6);
// console.log(myarray);
// myarray.pop();
myarray.unshift(0);
myarray.shift();
console.log(myarray);