// sol1
// 테스트 1 〉 통과 (36.75ms, 83MB)
// 테스트 2 〉	통과 (14.30ms, 83MB)
// 테스트 3 〉	통과 (12.15ms, 83MB)
// 테스트 4 〉	통과 (14.41ms, 83.2MB)
function solution(arr) {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }

  return stack;
}

// sol2
// 테스트 1 〉	통과 (43.69ms, 81.7MB)
// 테스트 2 〉	통과 (46.08ms, 82.7MB)
// 테스트 3 〉	통과 (54.45ms, 83MB)
// 테스트 4 〉	통과 (43.21ms, 81.8MB)
function solution(arr) {
  return arr.filter((item, index) => item !== arr[index + 1]);
}
