// 구명보트
// 출력: 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값
// sol1: 효율성 테스트 시간초과
// people 오름차순 정렬
// heaviest 보트에 타고 무게가 남으면 가능한 사람 1명 추가 구출, 안 남으면 새로운 보트
// people이 모두 구출될 때까지 반복
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let result = 0;

  while (people.length > 0) {
    const heaviest = people.pop();
    const additional = people.findIndex((weight) => weight + heaviest <= limit);

    if (additional > -1) people.splice(additional, 1);
    result++;
  }

  return result;
}

// sol2
// 전체 탐색해서 가능한 무게를 찾지 말고
// 가장 앞 인덱스(=가장 가벼운 무게)부터 추가 구출
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let result = 0;

  while (people.length > 0) {
    const heaviest = people.pop();

    if (heaviest + people[0] <= limit) people.shift();
    result++;
  }

  return result;
}

console.log(solution([10, 40, 100, 150, 240], 240));
console.log(solution([40, 40, 40, 40, 40, 40], 240));
