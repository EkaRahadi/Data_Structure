class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFront(data) {
        let node = new ListNode(data);
        if (this.head === null) {
            this.head = node;
            this.size++;
        } else {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }

    insertBack(data) {
        let node = new ListNode(data);
        if (this.head === null) {
            this.head = node;
            this.size++;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, position) {
        const index = position - 1;
        if (index < 0 || index > this.size) {
            return "Please insert a valid index !";
        } else {
            let node = new ListNode(data);
            if (index === 0 ) {
                node.next = this.head;
                this.head = node;
            } else {
                let current = this.head;
                let prev;
                let i=0;
                while(i < index) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                node.next = current;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeAt(position) {
        const index = position - 1;
        if (this.size === 0) {
            return "Empty LinkedList";
        } else if (index < 0 || index > this.size) {
            return "Please insert a valid index !";
        } else {
            let current = this.head;
            let prev;
            if (index === 0) {
                current = this.head;
                this.head = current.next;
                this.size--;
            } else {
                let i = 0;
                while (i < index) {
                    prev = current;
                    current = current.next;
                    i++;
                }
                prev.next = current.next;
                this.size--;
            }
        }
    }

    getHeadData() {
        if (this.size === 0) {
            return "Empty LinkedList";
        } else {
            return this.head.data;
        }
    }

    indexOf(data) {
        if (this.size === 0) {
            return "Empty LinkedList"; 
        } else {
            let current = this.head;
            let i = 0;
            while (current) {
                if (current.data === data) {
                    return i;
                }
                current = current.next;
                i++;
            }
            return "Index not found";
        }
    }

    // Helpers
    isEmpty() {
        if(this.size === 0) {
            return true;
        }
        return false;
    }
    sizeOfList() {
        return this.size;
    }
    printList() {
        let str = '';
        let current = this.head;
        if (this.size === 0) {
            return "Empty list";
        }
        while(current) {
            str += current.data + " ";
            current = current.next;
        }

        return str;
    }


}

let ll = new LinkedList();
ll.insertBack("Satu");
ll.insertBack("Dua");
ll.insertBack("Tiga");
ll.insertBack("Empat");
ll.insertBack("Lima");
console.log(ll.printList());
ll.removeAt(4);
console.log(ll.printList());
console.log(ll.getHeadData());
console.log(ll.indexOf("Lima"));
