// 베스트앨범
// 장르별 재생 횟수 총합, 장르 내 재생 횟수 가장 많은 노래 2개
// 1. 장르 종류를 담은 배열을 구한다.
// 2. 장르별 재생 횟수 총합을 구한다.
// 3. 장르 내 재생 횟수 max1, max2를 구한다.
// 4. 재생 횟수 총합이 많은 장르 -> 장르 내에서 재생 횟수가 많은 노래, 같으면 고유 번호가 낮은 노래 순으로
function solution(genres, plays) {
  const genreSet = new Set(genres);
  let hash = {};
  let result = [];

  for (const genre of genreSet) {
    hash[genre] = {
      total: 0,
      // [[max1, num1], [max2, num2]]
      max: [],
    };
  }

  for (let i = 0; i < plays.length; i++) {
    const curGenre = genres[i];
    const curPlay = plays[i];
    let maxArr = hash[curGenre].max;

    // 재생 횟수 총합에 재생 횟수 더하기
    hash[curGenre].total += curPlay;
    // max에 추가 -> max의 길이 <= 3
    maxArr.push([curPlay, i]);
    // max를 재생 횟수 기준으로 내림차순 정렬, 같으면 고유 번호 오름차순 정렬
    maxArr.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    // 최대값 2개만 자르기
    hash[curGenre].max = maxArr.slice(0, 2);
  }

  // [
  //   [ 'pop', { total: 3100, max: [Array] } ],
  //   [ 'classic', { total: 1450, max: [Array] } ]
  // ]
  // 재생 횟수 총합이 많은 순으로 정렬
  for (const [_, play] of Object.entries(hash).sort(
    (a, b) => b[1].total - a[1].total
  )) {
    const { _, max } = play;
    max.forEach(([_, number]) => result.push(number));
  }

  console.log(result);
  return result;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 800, 800, 2500]
);
