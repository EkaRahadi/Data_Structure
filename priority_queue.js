class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const item = new QueueElement(element, priority);
        let added = false;
        let position= null;
        if (this.isEmpty()) {
            this.items.push(item);
        } else {
            for(let i=0; i<this.items.length; i++) {
                if (priority < this.items[i].priority) {
                    position = i;
                    added = true;
                    break;
                }
            }

            if(added) {
                for(let i=this.items.length-1; i>=position; i--) {
                    this.items[i+1] = this.items[i];
                }
                this.items[position] = item;
            } else {
                this.items.push(item);
            }

        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Empty"
        }
        const temp = this.items[0];
        for(let i=0; i<this.items.length; i++) {
            this.items[i] = this.items[i+1];
        }
        this.items.length = this.items.length - 1;
        return temp;
    }

    printQueue() {
        let str = "";
        for(let i=0; i<this.items.length; i++) {
            str += this.items[i].element + " ";
        }
        return str;
    }

    front() {
        if(this.isEmpty()) {
            return "Empty"
        }
        return this.items[0];
    }

    back() {
        if(this.isEmpty()) {
            return "Empty"
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if(this.items.length === 0) {
            return true;
        }
        return false;
    }
}

const pQueue = new PriorityQueue();
pQueue.enqueue("Five", 5);
pQueue.enqueue("Four", 4);
pQueue.enqueue("One", 1);
pQueue.enqueue("Three", 3);
pQueue.enqueue("Two", 2);

console.log(pQueue.printQueue());
console.log(pQueue.dequeue());
console.log(pQueue.dequeue());
console.log(pQueue.front());
console.log(pQueue.back());
console.log(pQueue.isEmpty());