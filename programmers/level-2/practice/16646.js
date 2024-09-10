// early return: 1. ++, --, +-, -+ 포함 2. +, -로 끝남
// +,-(optional)와 0으로 이루어진 문자열 match
// 0의 개수 count -> result에 연산
function solution(expression) {
  const error =
    expression.includes("++") ||
    expression.includes("--") ||
    expression.includes("+-") ||
    expression.includes("-+") ||
    expression.endsWith("+") ||
    expression.endsWith("-");
  if (error) return "ERROR";

  let result = 0;
  const validExp = expression.match(/[+-]?0+/g);

  validExp.forEach((str) => {
    if (str[0] === "+" || str[0] === "-")
      result += Number(`${str[0]}${str.length - 2}`);
    else result += str.length - 1;
  });

  return result.toString();
}
