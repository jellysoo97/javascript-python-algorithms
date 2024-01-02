// stack
// 테스트 1 〉	통과 (63.64ms, 59.9MB)
// 테스트 2 〉	통과 (64.97ms, 50.2MB)
// 테스트 3 〉	통과 (31.09ms, 55.5MB)
// 테스트 4 〉	통과 (32.14ms, 56.4MB)
// 테스트 5 〉	통과 (31.34ms, 55.4MB)
// 테스트 6 〉	통과 (32.29ms, 56.4MB)
// 테스트 7 〉	통과 (34.53ms, 56.4MB)
// 테스트 8 〉	통과 (59.82ms, 57.7MB)
function solution(s) {
  const arr = s.split("");
  let stack = [arr[0]];

  if (s.length % 2 !== 0) {
    return 0;
  }

  for (let i = 1; i < s.length; i++) {
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
