// 할인 행사
// 0~discount.length-10까지 반복
// 10일간 원하는 품목을 모두 살 수 있는 지 체크 -> 있으면 카운트
function solution(want, number, discount) {
  let count = 0;
  let wantDict = {};

  want.forEach((elem, index) => (wantDict[elem] = number[index]));

  for (let i = 0; i <= discount.length - 10; i++) {
    let discountDict = {};
    const wants = Object.keys(wantDict);

    discount
      .slice(i, i + 10)
      .forEach((elem) => (discountDict[elem] = (discountDict[elem] || 0) + 1));

    for (let j = 0; j < wants.length; j++) {
      const key = wants[j];
      if (wantDict[key] > discountDict[key] || !discountDict[key]) break;
      if (j === wants.length - 1) count++;
    }
  }

  return count;
}

solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
