// 숫자정렬
// 기본 정렬 순서는 문자열의 유니코드를 따른다 -> 두자릿수 이상 숫자 비교엔 함수 사용
// ex) 유니코드에선 9가 80보다 뒤에 옴
// 오름차순 : arr.sort((a,b) => a - b)
// 내림차순 : arr.sort((a,b) => b - a) or sort().reverse()
function solution(n) {
  const result = (n + "")
    .split("")
    // 생략가능
    // '12311'.split('').sort() -> ['1', '1', '1', '2', '3']
    // .map((n) => +n)
    .sort()
    .reverse()
    .join("");

  return +result;
}
