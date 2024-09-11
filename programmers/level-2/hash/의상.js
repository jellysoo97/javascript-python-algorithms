// 종류 - 이름을 key-value 쌍으로 정리
// 가능한 조합의 개수 -> (각 종류에서 선택가능한 이름의 수 + 선택하지 않는 경우) 곱
// 마지막에 아무것도 선택하지 않을 경우의 수 1 제외
function solution(clothes) {
  let clothesMap = {};
  let result = 1;

  clothes.forEach(([name, type]) => {
    if (clothesMap[type]) clothesMap[type].push(name);
    else clothesMap[type] = [name];
  });

  for (const type in clothesMap) {
    result *= clothesMap[type].length + 1;
  }

  return result - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]);
