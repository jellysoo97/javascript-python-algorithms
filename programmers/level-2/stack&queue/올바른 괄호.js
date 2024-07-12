// 올바른 괄호
// 출력: 올바른 괄호이면 true, 아니면 false
// s를 순회
// "("이면 stack에 push
// ")"이면 stack에서 pop, stack의 길이가 0이면 return false
// stack에 짝이 맞지 않는 괄호가 남아있으면 return false, 아니면 true
function solution(s) {
  let stack = [];

  for (const bracket of s.split("")) {
    if (bracket === "(") stack.push(bracket);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
