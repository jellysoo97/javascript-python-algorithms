function solution(s) {
  const arr = s.split("");
  let stack = [];

  // 특수문자 소괄호는 정규식 내에서 백슬래시 필요 -> \(
  if (
    arr[0] === ")" ||
    (s.match(/\(/g) || []).length !== (s.match(/\)/g) || []).length
  ) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length ? false : true;
}
