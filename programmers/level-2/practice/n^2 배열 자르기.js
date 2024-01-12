// sol1
function solution(n, left, right) {
  let arr = [];

  for (let i = 0; i < right - left + 1; i++) {
    let row = Math.floor((left + i) / n);
    let col = (left + i) % n;
    arr.push(col < row ? row + 1 : col + 1);
  }

  return arr;
}

// sol2
// i % n 인덱스까지는 Math.floor(i / n) + 1 즉, 몇번째 줄인지가 들어갈 것이고
// 그 이후부터는 i % n 값이 들어감
function solution(n, left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(Math.max(i % n, Math.floor(i / n)) + 1);
  }

  return arr;
}
