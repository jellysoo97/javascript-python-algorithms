// sol1 : 테스트 1 〉	통과 (2.69ms, 43.9MB)
function solution(arr) {
  const min = Math.min(...arr);

  return arr.length === 1 ? [-1] : arr.filter((item) => item > min);
}

// sol2 : 테스트 1 〉	통과 (0.75ms, 43MB)
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);

  return arr.length ? arr : [-1];
}
