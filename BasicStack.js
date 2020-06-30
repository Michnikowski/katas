/*
Basic Stack

Implement a basic stack with the ability to push and pop values. Optionally, implement is_empty, size, and show methods.
*/

class Stack {
	constructor() {
		this.items = [];
	}

	//add item
	push(element) {
		this.items.push(element);
	}

	//remove item
	pop() {
		if (this.isEmpty()) {
			return 'Empty stock cant pop item...';
		}
		return this.items.pop();
	}

	//peek
	peek() {
		return this.items[this.items.length - 1];
	}

	//print stack
	printStack() {
		return this.items.join(',');
	}

	//is empty
	isEmpty() {
		return this.items.length === 0;
	}

	//stack size
	stackSize() {
		return this.items.length;
	}

	//show methods
	getMethods() {
		return Object.getOwnPropertyNames(Stack.prototype);
	}
}

//create stack
const stack = new Stack();

console.log(stack.getMethods());

console.log(stack.isEmpty());

console.log(stack.pop());

stack.push('Hello');
stack.push('world');
stack.push('!!!');

console.log(stack.peek());
console.log(stack.stackSize());
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.pop());

stack.push(1);
stack.push(20);
stack.push(300);

console.log(stack.peek());
console.log(stack.stackSize());
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.pop());

console.log(stack);
console.log(stack.items);
