class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

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

  // 전위 순회 dfs
  preOrderDfs() {
    var visited = [];
    var current = this.root;

    function helper(node) {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(current);
    return visited;
  }

  // 후위 순회 dfs
  postOrderDfs() {
    var visited = [];
    var current = this.root;

    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      visited.push(node.value);
    }

    helper(current);
    return visited;
  }

  // 중위 순회 dfs
  inOrderDfs() {
    var visited = [];
    var current = this.root;

    function helper(node) {
      if (node.left) helper(node.left);
      visited.push(node.value);
      if (node.right) helper(node.right);
    }

    helper(current);
    return visited;
  }
}

var tree = new Tree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.preOrderDfs()); // [10, 6, 3, 8, 15, 20]
console.log(tree.postOrderDfs()); // [3, 8, 6, 20, 15, 10]
console.log(tree.inOrderDfs()); // [ 3, 6, 8, 10, 15, 20 ]
