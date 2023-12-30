// 정규식
// \w : 한글, 숫자, 영어 등 문자 [a-zA-Z0-9_]
// \b : 문자(\w)와 비문자(\W) 사이의 경계 ex) 'test case' -> /\b\w/ 이면 '공백+c'이니까 'c'를 가리킴
function solution(s) {
  return s
    .replace(/\w/g, (str) => str.toLowerCase())
    .replace(/\b\w/g, (str) => str.toUpperCase());
}
