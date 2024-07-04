// 카드1
// 출력: 버린 카드들을 순서대로 출력, 마지막에 남게 되는 카드 번호
// N~1까지 큐에 카드 추가
// 큐 길이가 1 될때까지 loop
//    제일 위에 있는 카드 pop해서 result에 추가
//    제일 위에 있는 카드 pop해서 큐 맨 밑으로
// result 순서대로 출력, 큐의 마지막 남은 카드 출력
const fs = require("fs");
let N = Number(
  fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
);
// 7,6,5,4,3,2,1
// let queue = Array.from({ length: N }, (_, index) => index + 1);
let queue = Array.from({ length: N }, (_, index) => N - index);
let result = [];

while (queue.length > 1) {
  // result.push(queue.shift()); -> O(n) + O(1) = O(n)
  result.push(queue.pop()); // O(1) + O(1) = O(1)
  // queue.push(queue.shift()); -> O(n) + O(1) = O(n)
  queue.unshift(queue.pop()); // O(1) + O(n) = O(n)
}

result.push(queue.pop());

console.log(result.join(" "));
