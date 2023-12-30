// sol1
function solution(s) {
  let cnt = 0;
  let zeroCnt = 0;

  while (s !== "1") {
    cnt++;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        zeroCnt++;
      }
    }

    let removeZeroS = s
      .split("")
      .filter((str) => str !== "0")
      .join("");
    let length = removeZeroS.length;
    let binary = "";

    while (length > 0) {
      binary = (length % 2) + binary;
      length = Math.floor(length / 2);
    }

    s = binary;
  }

  return [cnt, zeroCnt];
}

// sol2
function solution(s) {
  let result = [0, 0];

  while (s !== "1") {
    result[0]++;
    // match() : 정규식 조건에 맞는 문자열 배열을 반환
    // 없으면 null 반환 -> || []으로 null.length 에러 핸들링
    result[1] += (s.match(/0/g) || []).length;

    // '0'을 없애고 이진법으로 변환
    // Object.prototype.toString() : 문자열 반환
    // 매개변수로 2~36까지의 기수를 받는다 -> 10진수를 n진수로 변환해서 반환한다
    s = s.replace(/0/g, "").length.toString(2);
  }

  return result;
}
