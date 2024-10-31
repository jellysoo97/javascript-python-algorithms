class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // tail 삽입
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  // tail 제거
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // head 제거
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  // head 삽입
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  // 인덱스 노드 get
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // 인덱스 노드 value change
  set(index, val) {
    var foundNode = this.get(index);
    if (!foundNode) return false;
    else {
      foundNode.value = val;
      return true;
    }
  }

  // 특정 위치에 삽입
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    else if (index === this.length) return !!this.push(val); // return boolean
    else if (index === 0) return !!this.unshift(val);

    var prevNode = this.get(index - 1);
    var newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    // or
    // var temp = prev.next;
    // prev.next = newNode;
    // newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    else if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();

    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = remodedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    // 1. swap head and tail
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    // 2. prev, next 생성
    var prev = null; // tail의 prev는 없다
    var next = null;
    // [100, 201, 250, 350, 999]
    // 3. loop
    for (var i = 0; i < this.length; i++) {
      // 3. 현재 노드의 next를 next 변수에 할당
      next = node.next;
      // 4. prev 변수를 현재 노드의 next에 할당
      node.next = prev;
      // 5. 앞으로 한칸씩 이동
      prev = node;
      node = next;
    } // 999 -> 350 -> 250 -> 201 -> 100 -> null
    return this;
  }
}

var list = new SinglyLinkedList();
