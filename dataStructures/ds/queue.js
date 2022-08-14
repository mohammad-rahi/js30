class Queue{
    constructor(){
        this.items = [];
    }

    enQueue(element){
        this.items.push(element);
    }

    deQueue(){
        if(this.isEmpty) return "Underflow";
        this.items.shift();
    }

    front(){
        if(this.isEmpty) return "No element";
        return this.items[0];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    printQueue(){
        return this.items;
    }
}

const queue = new Queue();

console.log(queue.deQueue());

console.log(queue.isEmpty());

queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);
queue.enQueue(50);
queue.enQueue(60);

console.log(queue.front());

console.log(queue.deQueue());

console.log(queue.printQueue());