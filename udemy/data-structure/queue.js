// Array implementation
var queue = [];
// sol1 -> push & shift
// 맨 뒤에 추가 -> O(1)
queue.push("first");
queue.push("second");
queue.push("third");
// 맨 앞 제거 -> O(n)
queue.shift();
queue.shift();
// sol2 -> unshift & pop
// 맨 앞 추가 -> O(n)
queue.unshift("first");
queue.unshift("second");
// 맨 뒤 제거 -> O(1)
queue.pop();
queue.pop();

// Queue class
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // tail에 삽입
  enqueue(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.length;
  }

  // head를 제거
  dequeue() {
    if (!this.head) return null;

    var temp = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;
    return temp.value;
  }
}
