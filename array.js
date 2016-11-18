var cars = ["honda", "toyota", "sh"];

console.log(cars.valueOf());

// list element in array
for (var i = 0; i < cars.length; i++) {
	console.log(cars[i]);
}

//console.log(cars.join(" and "));

// array look like FILO
// add last element
cars.push("1");
cars.push("2");
cars.push("3");

console.log(cars.valueOf());


// splice can use to add or delete element
// .splice(0, 2, "a", "b") // add 2 element at index 0
// .splice(0, 2) // remove 2 elements at index 0
//cars.splice(1, 2);

console.log(cars.valueOf());

//remove last element
while (cars.length > 0) {
	cars.pop();
	console.log(cars.valueOf());
}

// // remove first element
// while (cars.length > 0) {
// 	cars.shift();
// 	console.log(cars.valueOf());
// }
