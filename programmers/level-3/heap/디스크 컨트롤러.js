function solution(jobs) {
  const count = jobs.length;
  // 대기열
  const minHeap = new MinHeap();

  jobs = jobs.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  // 처음엔 가장 먼저 요청 들어온 작업부터 실행
  let time = jobs[0][0] + jobs[0][1];
  let sum = jobs[0][1];
  jobs.shift();

  while (jobs.length > 0 || minHeap.items.length > 0) {
    // 1. callTime <= time인 작업들만 대기열에 추가
    while (jobs.length && jobs[0][0] <= time) {
      minHeap.add(jobs.shift());
    }

    // 4. 대기열 비웠는데도 jobs가 남았으면 jobs[0][0] > time이라 대기열에 안들어 가는 상황
    // time을 jobs[0][0]으로 옮기기
    if (!minHeap.items.length && jobs.length) {
      time = jobs[0][0];
    }

    // 2. 대기열에서 소요시간 가장 작은 것 빼내서 실행
    if (minHeap.items.length) {
      const [callTime, duration] = minHeap.poll();
      // 3. time, sum 더해주기
      time += duration;
      sum += time - callTime;
    }
  }

  return Math.floor(sum / count);
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

    while (index && this.items[index][1] < this.items[parent][1]) {
      this.swap(index, parent);
      index = parent;
      parent = this.parentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    let child = this.childIndex(index);

    while (
      (this.items[child.left] &&
        this.items[index][1] > this.items[child.left][1]) ||
      (this.items[child.right] &&
        this.items[index][1] > this.items[child.right][1])
    ) {
      const smaller =
        !this.items[child.right] ||
        this.items[child.left][1] < this.items[child.right][1]
          ? child.left
          : child.right;

      this.swap(index, smaller);
      index = smaller;
      child = this.childIndex(index);
    }
  }
}

// 72
solution([
  [15, 2],
  [15, 34],
  [20, 47],
  [24, 10],
  [26, 1],
  [28, 39],
  [35, 43],
  [37, 5],
  [43, 20],
  [47, 22],
]);
// 15
solution([
  [0, 10],
  [4, 10],
  [5, 11],
  [15, 2],
]);
// 8
solution([
  [0, 3],
  [0, 2],
  [1, 9],
  [2, 6],
]);
// 5
solution([
  [1, 4],
  [7, 9],
  [1000, 3],
]);
// [[0, 3], [10, 1]] => 2
// [[7, 8], [3, 5], [9, 6]] => 9
// [[1, 4], [7, 9], [1000, 3]] => 5
// [[0, 1], [2, 2], [2, 3]] => 2
