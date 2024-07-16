// 짝지어 제거하기
// 출력: 짝지어 제거하기가 가능하면 1, 아니면 0
// 짝지어 제거: 같은 알파벳 2개 연속 -> 제거 후 문자열 이어붙이기 -> 문자열 모두 제거할 때까지 반복
// 문자열 순회
// stack 길이가 0이거나 peek가 현재 문자와 다르면 stack에 push
// peek가 현재 문자와 같으면 stack에서 pop
// early return: 길이가 홀수인 경우
function solution(s) {
  let stack = [];

  if (s.length % 2 !== 0) return 0;

  for (const alphabet of s) {
    if (stack.length === 0 || stack[stack.length - 1] !== alphabet)
      stack.push(alphabet);
    else if (stack.length > 0 && stack[stack.length - 1] === alphabet)
      stack.pop();
  }

  return stack.length > 0 ? 0 : 1;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
