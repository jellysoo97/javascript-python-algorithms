// 완전탐색
function solution(number) {
  let result = 0;

  number.forEach((first, fi) => {
    number.forEach((second, si) => {
      number.forEach((third, ti) => {
        // 중복된 인덱스 pass && 인덱스 순서 지키기
        if (fi >= si || si >= ti) {
          return;
        }

        if (first + second + third === 0) {
          result++;
        }
      });
    });
  });

  console.log(result);
  return result;
}

solution([-5, -2, 0, 2, 3]);
solution([-3, -2, -1, 0, 1, 2, 3]);
solution([-1, 1, -1, 1]);
