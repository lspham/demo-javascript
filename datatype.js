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
var player = "B'jorka";
var player1 = 'B\'jorka';
var player2 = `B'jorka`;
//var player3 = 'B''jorka'; wrong

console.log(player);
console.log(player1);
console.log(player2);
//console.log(player3);
// object
var lspham = {firstname: "Loc", lastname: "Pham"};
var book = {name: "java", author: lspham};
console.log(book.name);
//console.log(book.price);
console.log("name is " + book['name']);

book.price  = 100;

console.log(book.price);
console.log(book);
lspham.firstname = "Loc Son"
console.log(book.author);