/*
Basic Queue (class)

Implement a basic queue function with the ability to add and remove values.
*/

class Queue {
	constructor() {
		this.items = [];
	}

	//add item
	push(element) {
		this.items.push(element);
	}

	//remove item
	shift() {
		if (this.isEmpty()) {
			return 'Empty queue cant shift item...';
		}
		return this.items.shift();
	}

	//first in queue
	firstInQueue() {
		if (this.isEmpty()) {
			return 'Empty queue';
		}
		return this.items[0];
	}

	//last in queue
	lastInQueue() {
		if (this.isEmpty()) {
			return 'Empty queue';
		}
		return this.items[this.items.length - 1];
	}

	//print queue
	printQueue() {
		return this.items.join(',');
	}

	//is empty
	isEmpty() {
		return this.items.length === 0;
	}

	//queue size
	queueSize() {
		return this.items.length;
	}

	//show methods
	getMethods() {
		return Object.getOwnPropertyNames(Queue.prototype);
	}
}

//create stack
const queue = new Queue();

console.log(queue.getMethods());

console.log(queue.isEmpty());

console.log(queue.shift());

queue.push('Hello');
queue.push('world');
queue.push('!!!');

console.log(queue.lastInQueue());
console.log(queue.queueSize());
console.log(queue.printQueue());
console.log(queue.isEmpty());
console.log(queue.shift());
console.log(queue.firstInQueue());

queue.push(1);
queue.push(20);
queue.push(300);

console.log(queue.lastInQueue());
console.log(queue.queueSize());
console.log(queue.printQueue());
console.log(queue.isEmpty());
console.log(queue.shift());
console.log(queue.firstInQueue());

console.log(queue);
console.log(queue.items);
