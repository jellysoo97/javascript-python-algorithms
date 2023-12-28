// sort(callback) 작동원리
// 자바스크립의 sort 함수는 배열의 요소들을 String 타입으로 간주한다
// ex) 90, 110 -> "90", "110"으로 앞자리부터 비교 -> 90 > 110
// 그래서 숫자를 비교하려면 별도의 compare function이 필요하다
// compare function의 a,b 파라미터는 자바스크립트 엔진이 random하게 넣는다
// 어쨌든 a - b > 0이면 자리 교체, a - b <= 0이면 그대로 둔다
// 이 원리를 이용하면 다음과 같은 과정이 반복되고 엔진이 알아서 정렬해준다
// a = "30", b = "34" -> 3430 - 3034 > 0 -> ["34", "30"]
// a = "3", b = "30" -> 303 - 330 < 0 -> ["3", "30"]
function solution(numbers) {
  const sortedArr = numbers
    .map((number) => number + "")
    .sort((a, b) => b + a - (a + b));

  return sortedArr.join("");
}
