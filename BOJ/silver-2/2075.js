// N번째 큰 수
// 출력: N번째 큰 수
// -10억 <= 수 < 10억 -> 메모리 초과 주의
// * readline 모듈 사용 안하면 메모리 초과
// 최소힙 정렬
// 길이가 N을 넘어가면 하나 삭제
// 힙의 peek가 N번째 큰 수
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  // 비구조화 할당으로 교환하면 메모리 초과
  // 일반적으로 두 방법의 메모리 사용량은 큰 차이가 없음
  // 비구조화 할당도 내부적으로 임시 변수를 사용하는 것과 비슷하게 동작하기 때문
  // 왜 메모리 초과인지 미지수
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index) {
    let min = index;
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[min]
    )
      min = leftChildIndex;
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[min]
    )
      min = rightChildIndex;

    if (min !== index) {
      this.swap(index, min);
      this.heapifyDown(min);
    }
  }
}

const minHeap = new MinHeap();
let n = 0;

rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line);
    return;
  }

  line.split(" ").forEach((elem) => {
    minHeap.add(Number(elem));
    if (minHeap.heap.length > n) minHeap.remove();
  });

  n--;
  if (n === 0) rl.close();
});

rl.on("close", () => {
  console.log(minHeap.peek());
  process.exit();
});
