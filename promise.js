let promiseResolve = new Promise(function (resolve, reject) {
	// executor
	setTimeout(() => resolve('done'), 1000);
});
// resolve runs the first function in .then
promiseResolve.then(
	(result) => console.log(result), // "done" after 1 second
	(error) => console.log(error) // doesn't run
);
// console.log(promiseResolve);
//
let promiseReject = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('Whoops!')), 2000);
});
// reject runs the second function in .then
promiseReject.then(
	(result) => console.log(result), // doesn't run
	(error) => console.log(error) // shows "Error: Whoops!" after 1 second
);
// console.log(promiseReject);
let promise = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('Whoops!')), 1000);
});
promise.catch(console.log); // shows "Error: Whoops!" after 1 second
// //////////////////////////////////////////////////////////////////////////////////////
async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000);
	});

	let result = await promise; // wait until the promise resolves (*)

	console.log(result); // "done!"
}

f();
