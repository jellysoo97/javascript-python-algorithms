// 괄호 회전하기
// 문자열 s를 왼쪽으로 0~n만큼 회전시켰을 때 올바른 괄호 문자열의 개수
// 0~n 반복, i만큼 s 회전
// 올바른 괄호 문자열 체크
function solution(s) {
  let arr = s.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i > 0) arr.push(arr.shift());

    if (checkRightStr(arr)) count++;
  }

  return count;
}

function checkRightStr(arr) {
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack = [];

  for (const bracket of arr) {
    if (Object.keys(pairs).includes(bracket)) stack.push(bracket);
    else if (bracket === pairs[stack[stack.length - 1]]) stack.pop();
    else return false;
  }

  return stack.length > 0 ? false : true;
}

solution("[](){}");
solution("}]()[{");
solution("[)(]");
