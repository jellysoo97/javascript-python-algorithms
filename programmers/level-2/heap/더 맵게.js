function solution(scoville, k) {
  let minHeap = new MinHeap();
  let count = 0;

  scoville.forEach((food) => minHeap.add(food));

  // 1. scoville.length > 0 && 가장 작은 요소가 K미만이면 반복
  while (minHeap.items.length > 1 && minHeap.items[0] < k) {
    // 2. first + second * 2를 힙에 add
    const first = minHeap.poll();
    const second = minHeap.poll();

    minHeap.add(first + second * 2);
    count++;
  }

  return minHeap.items[0] >= k ? count : -1;
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
      (child.left < this.items.length &&
        this.items[index] > this.items[child.left]) ||
      (child.right < this.items.length &&
        this.items[index] > this.items[child.right])
    ) {
      const smaller =
        this.items[child.left] < this.items[child.right] ||
        !this.items[child.right]
          ? child.left
          : child.right;

      this.swap(index, smaller);
      index = smaller;
      child = this.childIndex(index);
    }
  }
}
