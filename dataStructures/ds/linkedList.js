class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
        }
        else {
            var current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;

    }

    insertAt(value, index) {
        if (index < 0 || index >= this.size) {
            console.log("Please enter a valid inde")
        }
        else {
            var curr, prev;
            const node = new Node(value);

            curr = this.head;

            if (index == 0) {
                node.next = curr;
                curr = node;
            }
            else {
                var it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeForm(index) {
        if (index < 0 || index >= this.size)
            return "Please Enter a valid index";
        else {
            var curr, prev, it = 0;

            curr = this.head;
            prev = curr;

            if (index == 0) {
                this.head = curr.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next

            }

            this.size--;
            return curr.value;
        }
    }

    removeValue(value) {
        var curr = this.head;
        var prev = null;

        while (curr != null) {
            if (curr.value === value) {
                if (prev == null) {
                    this.head = curr.next;
                }
                else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.value;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1;
    }

    indexOf(value) {
        var count = 0;
        var curr = this.head;

        while (curr != null) {
            if (curr.value === value)
                return count;
            count++;
            curr = curr.next;
        }
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += `${curr.value} `;
            curr = curr.next;
        }
        console.log(str);
    }
}

const ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10);

ll.printList();

ll.size_of_list();

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

ll.printList();

console.log("is element removed ?" + ll.removeValue(50));

ll.printList();

console.log("Index of 40 " + ll.indexOf(40));

ll.insertAt(60, 2);

ll.printList();

console.log("is List Empty ? " + ll.isEmpty());

console.log(ll.removeFrom(3));

ll.printList();