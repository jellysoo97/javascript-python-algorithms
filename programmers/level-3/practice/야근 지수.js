// 제곱 합의 최소값 = 평균치를 낮춰라
// loop 돌면서 최대값 - 1 해가면서 값들간 오차 줄이기
function solution(n, works) {
  // 1. 남은 시간 내에 작업 완료한 case early return
  const totalWorks = works.reduce((acc, cur) => acc + cur, 0);
  let heap = new MaxHeap();

  if (totalWorks <= n) {
    return 0;
  }

  for (const work of works) {
    heap.add(work);
  }

  // 2. loop 돌때마다 최대힙 peak - 1 한 후 다시 집어넣기
  while (n > 0) {
    const peak = heap.poll();

    heap.add(peak - 1);
    n--;
  }

  return heap.items.reduce((acc, cur) => acc + cur ** 2, 0);
}

class MaxHeap {
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
    const temp = this.items[0];

    this.items[0] = this.items.pop();
    this.heapifyDown();

    return temp;
  }

  heapifyUp() {
    let index = this.items.length - 1;
    let parentIndex = this.parentIndex(index);

    while (this.items[index] && this.items[index] > this.items[parentIndex]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let childIndex = this.childIndex(index);

    while (
      (this.items[childIndex.left] &&
        this.items[index] < this.items[childIndex.left]) ||
      (this.items[childIndex.right] &&
        this.items[index] < this.items[childIndex.right])
    ) {
      const biggerChildIndex =
        this.items[childIndex.left] > this.items[childIndex.right] ||
        !this.items[childIndex.right]
          ? childIndex.left
          : childIndex.right;

      this.swap(index, biggerChildIndex);
      index = biggerChildIndex;
      childIndex = this.childIndex(index);
    }
  }
}
