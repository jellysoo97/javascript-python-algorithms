function solution(q, r, code) {
  // loop for code
  // index % q === r이면 result에 추가
  return code
    .split("")
    .reduce((acc, cur, index) => (index % q === r ? acc + cur : acc + ""), "");
}
