function solution(want, number, discount) {
  if (!want.some((elem) => discount.includes(elem))) return 0;

  let pointer = 0;
  let result = 0;

  // pointer + 10 <= discount.length이면 반복
  while (pointer + 10 <= discount.length) {
    // pointer부터 discount 10씩 자르기
    let slicedDiscountArr = discount.slice(pointer, pointer + 10);
    let count = {};

    // slicedDiscountArr for loop
    // 각 재료 개수를 담은 객체 count 생성
    slicedDiscountArr.forEach((elem) =>
      count[elem] ? (count[elem] += 1) : (count[elem] = 1)
    );

    // want for loop
    // count[재료] !== number[index]이면 break;
    // 마지막인데 통과하면 result++
    for (const elem of want) {
      const index = want.indexOf(elem);
      if (count[elem] !== number[index]) {
        break;
      }

      if (index === want.length - 1) {
        result++;
      }
    }

    // pointer 1 이동
    pointer++;
  }

  return result;
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
