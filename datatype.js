//"use strict";
var age = 22;
const pi = 3.14158;
console.log(typeof pi);

if (parseInt(age)) {
	console.log("Age is number");
}

// parseInt
var myage = "39";
var myage2 = parseInt(myage);

console.log("typeof myage is " + typeof myage);
console.log("typeof myage2 is " + typeof myage2);

// boolean
var condition = false;

if (condition) {
	console.log("condition is true");
}
else {
	console.log("condition is false");
}

// string

// object
var lspham = {firstname: "Loc", lastname: "Pham"};
var book = {name: "java", author: lspham};
console.log(book.name);
console.log(book.price);

book.price  = 100;

console.log(book.price);
lspham.firstname = "Loc Son"
console.log(book.author);