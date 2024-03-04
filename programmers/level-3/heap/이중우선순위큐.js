// sol1
// 테스트 1 〉	통과 (0.20ms, 33.5MB)
// 테스트 2 〉	통과 (0.24ms, 33.5MB)
// 테스트 3 〉	통과 (0.38ms, 33.6MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.29ms, 33.4MB)
// 테스트 6 〉	통과 (0.32ms, 33.4MB)
function solution(operations) {
  const DELETE_MAX = "D 1";
  const DELETE_MIN = "D -1";
  let queue = new MinHeap();

  // operations loop
  for (const operation of operations) {
    // 큐가 비었는데 삭제 연산이면 무시
    if (
      !queue.items.length &&
      (operation === DELETE_MAX || operation === DELETE_MIN)
    ) {
      continue;
    }

    // I로 시작하면 큐에 데이터 추가
    if (operation.startsWith("I")) {
      const data = operation.split(" ")[1];

      queue.add(+data);
    }

    // 최소값 삭제 연산
    if (operation === DELETE_MIN) {
      queue.poll();
    }

    // 최대값 삭제 연산
    if (operation === DELETE_MAX) {
      queue.items.sort((a, b) => a - b).pop();
    }
  }

  // 최소힙만으로는 제대로 정렬이 되지 않음 -> 최대값을 위해 정렬
  queue.items.sort((a, b) => a - b);
  console.log(queue.items);

  // 큐가 비어있으면 [0,0], 비어있지 않으면 [max, min] return
  return queue.items.length
    ? [queue.items[queue.items.length - 1], queue.items[0]]
    : [0, 0];
}

class MinHeap {
  constructor() {
    this.items = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  childIndex(index) {
    return { left: index * 2 + 1, right: index * 2 + 2 };
  }

  swap(index1, index2) {
    const temp = this.items[index1];

    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  }

  add(value) {
    this.items.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.items.length === 0) return null;
    if (this.items.length === 1) return this.items.pop();

    const peak = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown();

    return peak;
  }

  heapifyUp() {
    let index = this.items.length - 1;
    let parent = this.parentIndex(index);

    while (index && this.items[index] < this.items[parent]) {
      this.swap(index, parent);
      index = parent;
      parent = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let child = this.childIndex(index);

    while (
      (this.items[child.left] && this.items[index] > this.items[child.left]) ||
      (this.items[child.right] && this.items[index] > this.items[child.right])
    ) {
      const smaller =
        !this.items[child.right] ||
        this.items[child.left] < this.items[child.right]
          ? child.left
          : child.right;

      this.swap(index, smaller);
      index = smaller;
      child = this.childIndex(index);
    }
  }
}

// sol2
// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.10ms, 33.4MB)
function solution(operations) {
  let queue = [];

  for (const operation of operations) {
    if (operation.startsWith("I")) {
      const data = operation.split(" ")[1];

      queue.push(+data);
      queue = queue.sort((a, b) => a - b);
      continue;
    }

    operation === "D 1" ? queue.pop() : queue.shift();
  }

  return queue.length ? [queue[queue.length - 1], queue[0]] : [0, 0];
}

solution(["I 4", "I -1", "I 6", "I 3"]);
