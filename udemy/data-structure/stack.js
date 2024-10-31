// Array implementation
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
stack.pop(); // youtube
stack.pop(); // instagram
stack.pop("amazon"); // amazon

// Linked list implementation
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 맨 앞에 추가
  unshift(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    return ++this.length;
  }

  // 맨 앞 제거
  shift() {
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
