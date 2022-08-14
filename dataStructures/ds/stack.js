class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        var str = "";
        this.items.forEach(item => {
            return str += `${item} `;
        });

        return str;
    }

}


const stack = new Stack();

console.log(stack.isEmpty());

console.log(stack.pop());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.printStack());