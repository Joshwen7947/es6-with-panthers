// .forEach()//////////////////////////////////////////////////////
// ['Mango', 'Banana', 'Orange'].forEach((item, index, array) => {
// 	console.log(`${item} is at index ${index} in ${array}`);
// });
// // .find()/////////////////////////////////////////////////////////
// const monsters = ['m1', 'm2', 'm3', 'target', 'target'];
// const findConditon = (e) => {
// 	let condition = e === 'target';
// 	console.log(condition);
// 	return condition;
// };
// let result = monsters.find(findConditon);
// console.log(monsters);
// console.log(result);
// //
// // let users = [
// // 	{ id: 1, name: 'John' },
// // 	{ id: 2, name: 'Pete' },
// // 	{ id: 3, name: 'Mary' },
// // ];

// // let user = users.find((item) => item.id == 1);
// // let { name } = users.find((item) => item.id == 1);

// // console.log(user.name); // John
// // console.log(name); // John
// //
// // FILTER/////////////////////////////////////////////////////////
// let users = [
// 	{ id: 1, name: 'John', score: 15 },
// 	{ id: 2, name: 'Pete', score: 25 },
// 	{ id: 3, name: 'Mary', score: 45 },
// 	{ id: 4, name: 'Josh', score: 65 },
// 	{ id: 5, name: 'James', score: 5 },
// ];

// // returns array of the first two users
// let someUsers = users.filter((item) => item.id < 4); //3 items less than 4 in array
// let results = users.filter((item) => {
// 	if (item.score < 8) {
// 		item.score = 9;
// 	}
// 	return item.score >= 8;
// });
// console.log(someUsers.length); // Return 3
// console.log(results);
// //
// // .MAP()//////////////////////////////////////////////////////////
// let answer = users.map((e) => {
// 	// e.score = 10; //mutates original array
// 	// return e;
// 	const newItem = { ...e, score: 10 }; //Doesn't mutate original
// 	return newItem;
// });
// console.log(answer); //All scores are now equal to 10
// console.log(users);
// //
// //.sort()//////////////////////////////////////////////////////////
// let array = [1, 2, 15];

// array.sort(); //sort by default sorts as a string, refer below
// // console.log(array); //1, 15, 2
// //
// let users = [
// 	{ id: 1, name: 'John', age: 32 },
// 	{ id: 2, name: 'Pete', age: 14 },
// 	{ id: 3, name: 'Mary', age: 60 },
// ];
// users.sort((a, b) => {
// 	return a.age - b.age;
// });
// console.log(users);

// const compareAge = (userA, userB) => {
// 	if (userA.age > userB.age) return 1;
// 	if (userA.age === userB.age) return 0;
// 	if (userA.age < userB.age) return -1;
// };

// users.sort(compareAge);
// [
// 	{ id: 2, name: 'Pete', age: 14 },
// 	{ id: 1, name: 'John', age: 32 },
// 	{ id: 3, name: 'Mary', age: 60 },
// ];
//RETURN()///////////////////////////////////////////////////////
// let cart = [
// 	{ id: 1, name: 'Banana', price: 0.5, quantity: 5 },
// 	{ id: 2, name: 'Mango', price: 1.5, quantity: 3 },
// 	{ id: 3, name: 'Orange', price: 0.9, quantity: 7 },
// ];
// // what is 'total'?  How does reduce know that item is valid?
// let totalPrice = cart.reduce(
// 	(total, item) => total + item.price * item.quantity,
// 	0
// );
// console.log(totalPrice); // $13.3, adds everything in cart together
//

//

//
//CHALLENGES
const programmers = [
	'Dennis Ritchie',
	'Brian Kernighan',
	'Ken Thompson',
	'Linus Torvalds',
	'Bjarne Stroustrup',
	'Tim Berners-Lee',
	'Donald Knuth',
	'Alan Turing',
	'Mark Zuckerberg',
	'Bill Gates',
	'Larry Page',
	'Elon Musk',
	'Jack Dorsey',
	'Satoshi Nakamoto',
	'Ada Lovelace',
	'Grace Hopper',
	'Dan Ambramov',
	'Jordan Walke',
	'Ryan Dahl',
	'David Heinemeier Hansson',
	'Guido van Rossum',
	'Yukihiro Matsumoto',
	'Sergey Brin',
	'Lyndsey Scott',
	'Abhinav Asthana',
	'Abhijit Kane',
	'Ankit Sobti',
	'Loi Tran',
	'Charles Lee',
	'Tuan Nguyen',
	'Tan Vo',
];

//First Name
let firstName = programmers.forEach((x) => {
	let name = x.split(' ');
	console.log(`First Name: ${name[0]}`);
});
// Last Name
let lastName = programmers.forEach((x) => {
	let name = x.split(' ');
	console.log(`Last Name: ${name[1]}`);
});
// Length of characters
let firstNameLength = programmers.forEach((x) => {
	let name = x.split(' ');
	console.log(`The first name ${name[0]} has ${name[0].length} letters`);
});
let lastNameLength = programmers.forEach((x) => {
	let name = x.split(' ');
	console.log(`The last name ${name[1]} has ${name[1].length} letters`);
});
let fullNameLength = programmers.forEach((x) => {
	let name = x;
	console.log(`The name ${name} has ${name.length - 1} letter's`);
});
//Sort
programmers.sort();
console.log(programmers);
//
function lastNameAlpha(programmer) {
	let list = [];
	for (i = 0; i < programmer.length; i++) {
		let lastName = programmer[i].split(' ')[1];
		let firstName = programmer[i].split(' ')[0];
		let name = lastName + `, ` + firstName;
		list.push(name);
	}
	return list.sort();
}

console.log(lastNameAlpha(programmers));
console.log(programmers);
