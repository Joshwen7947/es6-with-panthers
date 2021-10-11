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
// EXERCISE SHORTHAND
// const name = 'Parrot';
// const colors = ['Red', 'Green', 'Blue', 'Yellow'];

// const bird = {};
// bird.name = name;
// bird.colors = colors;

// console.log(bird);
//
const name = 'Parrot';
const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const talons = true;

const bird = {
	name: name,
	colors: colors,
	// CHANGE ME
};
bird.talons = talons;

console.log(bird);
//
const capital = 'Hanoi';
const continent = 'Asia';

const vietnam = {
	// CHANGE ME
};
vietnam.capital = capital;
vietnam.continent = continent;
console.log(vietnam);
//
const wheelsCount = 4;
const doorsCount = 4;
const color = 'black';

const car = {
	// CHANGE ME
};
car.wheelsCount = wheelsCount;
car.doorsCount = doorsCount;
car.color = color;
console.log(car);
