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
      (this.items[childIndex.left] && this.items[index] < this.items[childIndex.left]) ||
      (this.items[childIndex.right] && this.items[index] < this.items[childIndex.right])
    ) {
      const biggerChildIndex =
        this.items[childIndex.left] > this.items[childIndex.right] || !this.items[childIndex.right]
          ? childIndex.left
          : childIndex.right;

      this.swap(index, biggerChildIndex);
      index = biggerChildIndex;
      childIndex = this.childIndex(index);
    }
  }
}

// 재도전
// 야근 지수
// 제곱의 합 최소화 = 평균치를 최소화 -> 큰 수부터 처리해야 한다
// 1. 큐 생성 - works 내림차순으로 정렬한다. 작업량이 많은게 먼저온다
// 2. n이 0이 될때까지 반복한다.
// 3.   인덱스0 > 0 && 인덱스0 >= 인덱스1이면 인덱스0--
// 4.   인덱스0 < 인덱스1이면 큐의 맨 마지막에 넣는다.
// 5.   큐를 내림차순으로 다시 정렬한다.
// 6. 피로도를 구한다.
// sol1 - 시간 초과
// function solution(n, works) {
//   let queue = works.sort((a, b) => b - a);

//   while (n > 0) {
//     if (queue[0] > 0 && queue[0] >= queue[1]) queue[0]--;
//     if (queue[0] < queue[1]) queue.push(queue.shift());

//     queue.sort((a, b) => b - a);
//     n--;
//   }

//   return queue.reduce((prev, cur) => prev + cur ** 2, 0);
// }

// sol2
// 큐 정렬이 문제
// 200 200 200 -> 199 200 200 -> 200 199 200 -> 200 200 199
function solution(n, works) {
  let queue = works.sort((a, b) => b - a);

  while (n > 0) {
    if (queue[0] > 0 && queue[0] >= queue[1]) queue[0]--;

    let i = 0;
    while (i < queue.length - 1 && queue[i] < queue[i + 1]) {
      // 다음 인덱스보다 작으면 자리 바꾸기
      [queue[i], queue[i + 1]] = [queue[i + 1], queue[i]];
      i++;
    }

    n--;
  }

  return queue.reduce((prev, cur) => prev + cur ** 2, 0);
}

solution(4, [4, 3, 3]);
console.log("----");
solution(1, [2, 1, 2]);
console.log("------");
solution(3, [1, 1]);
