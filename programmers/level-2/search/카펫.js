// 카펫
// 출력: 카펫의 가로, 세로 크기
// yellow의 약수 쌍 구하기
// width: 큰 약수 + 2, height: 작은 약수 + 2
// width * height - yellow = brown을 만족하는 width, height
// return [width, height]
function solution(brown, yellow) {
  let width = 0;
  let height = 0;

  for (let i = 1; i <= Math.sqrt(yellow); i++) {
    if (yellow % i !== 0) continue;
    height = i + 2;
    width = yellow / i + 2;
    if (width * height - yellow === brown) break;
  }

  return [width, height];
}

console.log(solution(24, 24));
