const user = {
	currentBalance: 5000,
	transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [
	{
		amount: 3000,
		type: 'deposit',
		category: 'Salary - Full Time',
	},
	{ category: 'Dining', amount: 50, type: 'withdrawal' },
	{ category: 'Dining', amount: 100, type: 'withdrawal' },
	{ category: 'Rent', amount: 2000, type: 'withdrawal' },
	{ category: 'Groceries', amount: 250, type: 'withdrawal' },
	{
		amount: 250,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 250,
		type: 'withdrawal',
		category: 'Health',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Travel - Fuel',
	},
	{ category: 'Living', amount: 650, type: 'withdrawal' },
	{ category: 'Groceries', amount: 500, type: 'withdrawal' },
	{ category: 'Living', amount: 250, type: 'withdrawal' },
	{ category: 'Living', amount: 250, type: 'withdrawal' },
	{
		amount: 5000,
		type: 'deposit',
		category: 'Salary - Part Time',
	},
	{ category: 'Groceries', amount: 450, type: 'withdrawal' },
	{
		amount: 58,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Health',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{
		amount: 150,
		type: 'withdrawal',
		category: 'Transportation',
	},
	{ category: 'Groceries', amount: 100, type: 'withdrawal' },
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 500,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{ category: 'Groceries', amount: 300, type: 'withdrawal' },
	{
		amount: 500,
		type: 'withdrawal',
		category: 'Travel - Airline',
	},
	{
		amount: 1500,
		type: 'withdrawal',
		category: 'Travel - Hotel',
	},
	{
		amount: 50,
		type: 'withdrawal',
		category: 'Travel - Fuel',
	},
	{ category: 'Groceries', amount: 200, type: 'withdrawal' },
	{
		amount: 500,
		type: 'deposit',
		category: 'Portfolio Dividends',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Travel - Fuel',
	},
	{ category: 'Groceries', amount: 200, type: 'withdrawal' },
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Entertainment',
	},
	{
		amount: 100,
		type: 'withdrawal',
		category: 'Health',
	},
];
// Function to return number of deposits
function deposit() {
	let depositArray = user.transactionsMonthToDate.filter(
		(e) => e.type === `deposit`
	);
	console.log(
		`There have been ` + depositArray.length + ` deposits in the account`
	);
	return depositArray.length;
}
deposit();
//withdrawal
function withdrawal() {
	let withdrawalArray = user.transactionsMonthToDate.filter(
		(e) => e.type === `withdrawal`
	);
	console.log(
		`There have been ` +
			withdrawalArray.length +
			` withdrawals from the account`
	);
	// console.log(withdrawalArray.length);
	return withdrawalArray.length;
}
withdrawal();
//
function compareDifference() {
	console.log(
		`There were ${withdrawal()} withdrawals and only ${deposit()} deposits`
	);
}
compareDifference();
//GROCERY COST
function sumGroceries() {
	let sum = 0;
	let data = user.transactionsMonthToDate;
	for (let i = 0; i < data.length; i++) {
		console.log(data[i], `i`, i);
		let item = data[i];
		if (item.category === 'Groceries') {
			//add amount to my sum
			sum += item.amount;
		}
	}
	return sum;
}
console.log(sumGroceries());
//
function sumEntertainment() {
	let sum = 0;
	let myArray = user.transactionsMonthToDate;
	for (let i = 0; i < myArray.length; i++) {
		let item = myArray[i];
		if (item.category === 'Entertainment') {
			sum += item.amount;
		}
	}
	return sum;
}
console.log(sumEntertainment(), `num`);
// conversion

// Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.
function convertToVnd() {
	let myArray = user.transactionsMonthToDate;
	for (let i = 0; i < myArray.length; i++) {
		let item = myArray[i];
		item.amount *= 23000;
		item.currency = 'VND';
	}
	console.log(myArray);
}
convertToVnd();
//
// Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
// travel sum
function sumTravel() {
	let sum = 0;
	let myArray = user.transactionsMonthToDate;
	for (let i = 0; i < myArray.length; i++) {
		let item = myArray[i];
		if (item.category === 'Travel') {
			sum += item.category;
		}
	}
	return sum;
}
console.log(sumTravel());
// Transportation
function sumOfTrans() {
	let sum = 0;
	let data = user.transactionsMonthToDate;
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		if (item.category === 'Transportation') {
			sum += item.category;
		}
	}
	return sum;
}
console.log(sumOfTrans());
