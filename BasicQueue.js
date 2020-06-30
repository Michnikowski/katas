/*
Basic Queue

Implement a basic queue function with the ability to add and remove values.
*/

function BasicQueue(arr, item, type) {
	if (type === 'A') {
		arr.push(item);
	} else if (type === 'D') {
		arr.indexOf(item) > -1 ? arr.splice(arr.indexOf(item), 1) : false;
	}
	return arr;
}

const arr = [1, 3, 4, 'test', 6, 'ok'];

// BasicQueue(arr, 0, 'A');
// console.log(arr);
// BasicQueue(arr, 'hello', 'A');
// console.log(arr);
// BasicQueue(arr, 1, 'D');
// console.log(arr);
// BasicQueue(arr, 'ok', 'D');
// console.log(arr);
// BasicQueue(arr, 1242, 'A');
// console.log(arr);
// BasicQueue(arr, 0, 'D');
// console.log(arr);
// BasicQueue(arr, 'not exists', 'D');
// console.log(arr);
// BasicQueue(arr, 'test', 'A');
// console.log(arr);
// BasicQueue(arr, 'test', 'D');
// console.log(arr);

module.exports = BasicQueue;
