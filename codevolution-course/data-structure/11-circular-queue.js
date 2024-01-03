class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    // -1 : imply pointers do not point at any position in the queue
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      // if capacity is 5 and this.rear = 4, this.rear + 1 shoule point at 0 (not 5)
      // 꽉 채워진 상태에서 dequeue 한번 발생하면 index 0가 비는데
      // 이때 포인터가 5를 가리키면 안되고 다시 index 0을 가리켜야 함
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;

      // just in case of dequeue, front also has to be moved
      // if front pointer is moved to index 0 once, it can remain the same
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;

    // if array is empty after dequeue, two pointers should point at -1
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    // return the removed value
    return item;
  }

  // return front
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let str = "";

      for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }

      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull()); // true
queue.print(); // 10 20 30 40 50

console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
queue.print(); // 20 30 40 50
queue.enqueue(60);
queue.print(); // 20 30 40 50 60
