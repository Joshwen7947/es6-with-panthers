//  Function to convert VND to USD
// const usdToVND = 23000;

// function vnd(e) {
// 	console.log(`test 1`);
// 	let vndToUSD = user.transactionsMonthToDate.filter(
// 		(e) => e.currency === `VND`,
// 		console.log(`test 2`)
// 	);
// 	if (vndToUSD === `VND`) {
// 		console.log(`test 3`);

// 		let money = vndToUSD / 23000;
// 		console.log(money);
// 	}
// }

// console.log(vnd());
// console.log(vnd(user.transactionsMonthToDate));
// vnd(user.transactionsMonthToDate);
//
// function sortCats() {
// 	let grocery = user.transactionsMonthToDate.filter(
// 		(e) => e.category === `Groceries`
// 	);
// 	let entertainment = user.transactionsMonthToDate.filter(
// 		(e) => e.category === `Entertainment`
// 	);
// 	let entertainmentTotal = entertainment.length;
// 	document.getElementById(`3.4.1`).innerHTML =
// 		`There were ` + entertainmentTotal + ` entertainment transactions`;
// 	let groceryTotal = grocery.length;
// 	document.getElementById(`3.4`).innerHTML =
// 		`There were ` + groceryTotal + ` grocery transactions`;
// 	let travel = user.transactionsMonthToDate.filter(
// 		(e) => e.category === `Travel`
// 	);
// 	let travelTotal = travel.length;
// 	document.getElementById(`3.4.2`).innerHTML =
// 		`There were ` + travelTotal + ` travel transactions`;
// }
// sortCats();
// function returnBalance() {
// 	document.getElementById(`3.3`).innerHTML =
// 		`Your current balance is $` + user.currentBalance;
// 	document.getElementById(`3.3.1`).innerHTML = `Transaction History`;
// 	let withdrawalArray = user.transactionsMonthToDate.filter(
// 		(e) => e.type === `withdrawal`
// 	);
// 	let totalAmount = withdrawalArray.reduce(
// 		(total, current) => total - current.amount,
// 		4384
// 	);
// 	document.getElementById(`3.3.2`).innerText =
// 		`There have been ` +
// 		withdrawalArray.length +
// 		` withdrawals from the account`;
// }
// returnBalance();
// user.transactionsMonthToDate.forEach((trans) => {
// 	if (trans.type === 'deposit') {
// 		console.log(`deposit`);
// 	}
// });

// user.transactionsMonthToDate.forEach((trans) => {
// 	if (trans.type === 'withdrawal') {
// 		console.log(`withdrawal`);
//
