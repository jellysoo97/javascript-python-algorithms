function solution(n, t, m, p) {
  // 1. 숫자 문자열 구하기
  // 최소 길이: 미리 구할 숫자의 갯수 * 참가 인원
  let numbers = new Array(t * m)
    .fill()
    .map((_, index) => index)
    .reduce((acc, cur) => acc + cur.toString(n).toUpperCase(), "");
  let index = p - 1;
  let result = "";

  // 2. result.length가 t가 될때까지 반복
  while (result.length < t) {
    // 3. 특정 인덱스의 숫자를 찾아서 result에 넣는데 그 값이 없다 = numbers가 부족하다
    // 다시 t*m만큼 추가하기
    if (!numbers[index]) {
      numbers += numbers
        .split("")
        .map((number) => parseInt(number) + t * m)
        .reduce((acc, cur) => acc + cur.toString(n).toUpperCase(), "");
    }

    // 4. result에 말해야 하는 숫자 추가
    result += numbers[index];
    // index 간격 m만큼 더하기
    index += m;
  }

  return result;
}
