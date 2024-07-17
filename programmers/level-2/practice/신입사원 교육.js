// 신입사원 교육
// 출력: 신입사원들의 능력치 합의 최솟값
// 매번 가장 작은 두 능력치를 교육, 정렬 시간 복잡도 최소화
// 항상 가장 작은 두 능력치를 맨 뒤로 정렬
// 뒤에서부터 ability[j]와 sum을 비교 -> ability[j]가 크면 sum push, 작으면 정렬된 자리에 splice
// sol1: 시간초과(91.7%)
function solution(ability, number) {
  ability.sort((a, b) => b - a);

  for (let i = 0; i < number; i++) {
    let sum = ability.pop() + ability.pop();

    for (let j = ability.length - 1; j >= 0; j--) {
      if (ability[j] >= sum) {
        ability.push(sum, sum);
        break;
      }

      if (ability[j - 1] < sum) continue;
      else {
        ability.splice(j, 0, sum, sum);
        break;
      }
    }
  }

  return ability.reduce((prev, cur) => prev + cur, 0);
}

// sol2: 최소힙
function solution(ability, number) {
  class MinHeap {
    constructor() {
      this.heap = [];
    }

    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }

    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [
        this.heap[index2],
        this.heap[index1],
      ];
    }

    add(value) {
      this.heap.push(value);
      this.heapifyUp();
    }

    extractMin() {
      if (this.heap.length === 1) return this.heap.pop();
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }

    heapifyUp() {
      let index = this.heap.length - 1;
      let parentIndex = this.getParentIndex(index);
      while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        index = parentIndex;
        parentIndex = this.getParentIndex(index);
      }
    }

    heapifyDown(index) {
      let smallest = index;
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      )
        smallest = leftChildIndex;
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      )
        smallest = rightChildIndex;

      if (smallest !== index) {
        this.swap(smallest, index);
        this.heapifyDown(smallest);
      }
    }
  }

  const minHeap = new MinHeap();
  ability.forEach((elem) => minHeap.add(elem));

  for (let i = 0; i < number; i++) {
    let sum = minHeap.extractMin() + minHeap.extractMin();

    minHeap.add(sum);
    minHeap.add(sum);
  }

  return minHeap.heap.reduce((prev, cur) => prev + cur, 0);
}

solution([10, 3, 7, 2], 2);
solution([1, 2, 3, 4], 3);
