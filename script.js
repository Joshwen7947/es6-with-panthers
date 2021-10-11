console.log(`test`);

const josh = {};
josh.name = 'josh';
josh.age = 24;
josh.job = 'web dev';
console.log(josh);
//
const myObj = {};
myObj.a = 1; //a: 1
myObj['b'] = 'value'; //b: 'value

let myNumber = 3;
console.log({ myNumber }); //CL variable name and value (myNumber : 3)

function objectShorthand() {
	//
	// EXERCISE SHORTHAND
	//
	const name = 'Parrot';
	const colors = ['Red', 'Green', 'Blue', 'Yellow'];
	const talons = true;

	const bird = {
		name,
		colors,
		talons,
	};
	console.log(bird);
	//
	const capital = 'Hanoi';
	const continent = 'Asia';

	const vietnam = {
		capital,
		continent,
	};
	console.log(vietnam);
	//
	const wheelsCount = 4;
	const doorsCount = 4;
	const color = 'black';

	const car = {
		wheelsCount,
		doorsCount,
		color,
	};
	console.log(car);
}
function restSpread() {
	// OBJECT DESRUCTURING/////
	const myObject = { x: 1, y: 2, myArray: ['a', 'b', 'c'] };

	let { x, y, myArray } = myObject; // Acts the same as the code below
	// let x = myObject.x;
	// let y = myObject['y'];
	// let myArray = myObject.myArray;
	console.log(x, y, myArray);
	console.log(myObject);
	let [one, two] = myArray; //targets the position of the elements
	console.log(one, two); //Outputs a, b
	//////////////////////////////////////////////////////////////////////
	// REST AND SPREAD
	const state = { counter: 1, list: ['a', 'b'] };

	// rest destructuring
	const { list, ...rest } = state;

	console.log(rest); // output: { counter: 1 }
	console.log(list); // output: ["a", "b"]
	//
	const num = [-1, 5, 11, 3];
	// let [a, b, c, d] = num;
	console.log(Math.max(...num));
	// if the ... is on the 'left of operator' it is REST.  else it's SPREAD

	// let [a, ...haha] = arr; //...haha is REST
	// let arr = [...haha]; //...haha is SPREAD
	//////////////////////////////////////////////////////////////////////
	// const x = ['a', 'b'];
	// 	const y = ['c'];
	// 	const z = ['d', 'e'];
	// 	const add = [1, 2, 3];
	// 	const combine = [...x, ...y, ...z]; // ["a", "b", "c", "d", "e"]
	// 	console.log(combine);
	// 	combine.push(...add); //adds(spreads) 1,2,3 into the array
	// 	console.log(combine);
}
//
function getAverage(obj) {
	// console.log(`getAverage`, obj);
	// console.log(`Value of x: `, obj.x);
	// console.log(`Value of y: `, obj.y);
	// console.log(`Value of z: `, obj.z);
	// let x = obj.x;
	// let y = obj.y;
	// let z = obj.z;

	let { x, y, z } = obj;
	return Math.floor((x + y + z) / 3.0); // CHANGE ME
}

console.log(getAverage({ x: 3.6, y: 7.8, z: 4.3 }));
//
function getAddress(city, country, address) {
	console.log({ city, country, address });
	let { street } = address;
	return city === 'HCMC' && country === 'Vietnam' && street === 'Ton Dan'; // CHANGE ME
}
let data = {
	city: 'HCMC',
	country: 'Vietnam',
	address: {
		number: 12,
		street: 'Ton Dan',
		district: '4',
	},
};
// console.log(getAddress(data));
//
function objectifyElements(arr) {
	let { first, second, third } = arr;
	return { first, second, third }; // CHANGE ME
}

console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4);
//
function getFoodItems() {
	const food = [
		['carrots', 'beans', 'peas', 'lettuce'],
		['apples', 'mangos', 'oranges'],
		['cookies', 'cake', 'pizza', 'chocolate'],
	];

	const carrots = food[0][0];
	const cookies = food[2][0];
	const mangos = food[1][2]; // CHANGE ME

	return { carrots, cookies, mangos }; // CHANGE ME
}

console.log(getFoodItems().mangos === 'mangos');
// ARROW FUNCTIONS
function multiArgument() {
	// CHANGE BELOW

	const divide = (a, b) => a / b;
	return divide(40, 10);
}
console.log(multiArgument());
//
function spreadWithArrow() {
	// CHANGE BELOW
	const asArray = (...args) => args;
	return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow());
//
function withObject() {
	// CHANGE BELOW
	const getObject = (favoriteCandy) => favoriteCandy;
	return getObject('twix');
}
console.log(withObject());
//
function withMultiLineExpression() {
	// CHANGE BELOW
	const getString = (name) =>
		`
		  Hello there ${name}
		  How are you doing today?
		`;
	return getString('Ryan');
}
console.log(withMultiLineExpression());
//
function curryAdd() {
	// CHANGE BELOW
	const curryAddition = (a) =>
		function (b) {
			return function (c) {
				return a + b + c;
			};
		};
	return curryAddition(9)(3)(5);
}
console.log(curryAdd());
