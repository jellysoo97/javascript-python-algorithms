class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 노드 삽입
  insert(value) {
    var newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // 노드 탐색
  find(value) {
    if (!this.root) return false;

    // 확인할 값
    var current = this.root;
    var found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    return found;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
// tree.insert(13);
// tree.root = new Node(10);
// tree.root.left = new Node(7);
// tree.root.next = new Node(15);
// tree.root.left.right = new Node(5);
// tree.root.left.right = new Node(9);
