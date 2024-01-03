// optimize queue using object
class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  // add element to the rear
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // remove element from front and return it
  dequeue() {
    const item = this.items[this.front];

    delete this.items[this.front];
    this.front++;

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.items);
  }
}

// queue instance
const queue = new Queue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size()); // 3
queue.print(); // {'0' : 10, '1': 20, '2': 30}

console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
