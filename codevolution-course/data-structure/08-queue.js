class Queue {
  constructor() {
    this.items = [];
  }

  // adds element to one end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // removes element from the front end of the queue
  // oldest element is removed
  dequeue() {
    // shift() : O(n) -> not good
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  // returns the first element of the queue without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// queue instance
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // 3
queue.print(); // 10,20,30

console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
