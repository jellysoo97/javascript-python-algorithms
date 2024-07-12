// 이진 변환 반복하기
// 출력: 이진 변환 횟수, 제거된 0의 개수
// 이진 변환 함수 -> 횟수 카운트, 제거한 0의 개수 카운트
// s가 "1"이 될 때까지 함수 실행 반복
function solution(s) {
  let count = 0;
  let zeroCount = 0;

  function convertToBinary(str) {
    count++;
    // str.match(/0/g)?.length -> match() 결과가 null이면 undefined
    zeroCount += str.match(/0/g)?.length || 0;
    return str.replaceAll("0", "").length.toString(2);
  }

  while (s !== "1") {
    s = convertToBinary(s);
  }

  return [count, zeroCount];
}

solution("110010101001");
solution("01110");
solution("1111111");
