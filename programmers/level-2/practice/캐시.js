// sol1
// LRU(Least Recently Used) 캐시 교체 알고리즘: 가장 오랫동안 참조되지 않은 페이지를 교체한다
// 놓친 포인트: 캐시 배열에서 참조한 도시가 있다면 제거 후 마지막 인덱스에 새로 추가해줘야 한다
// 테스트 11 〉	통과 (56.43ms, 50MB)
// 테스트 12 〉	통과 (0.23ms, 33.6MB)
// 테스트 13 〉	통과 (0.25ms, 33.6MB)
// 테스트 14 〉	통과 (0.29ms, 33.5MB)
// 테스트 15 〉	통과 (0.35ms, 33.4MB)
// 테스트 16 〉	통과 (0.47ms, 33.6MB)
// 테스트 17 〉	통과 (0.19ms, 33.6MB)
// 테스트 18 〉	통과 (0.70ms, 33.5MB)
// 테스트 19 〉	통과 (1.55ms, 33.6MB)
// 테스트 20 〉	통과 (1.22ms, 33.7MB)
function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  const upperCaseCities = cities.map((city) => city.toUpperCase());

  if (!cacheSize) {
    return cities.length * 5;
  }

  for (let i = 0; i < upperCaseCities.length; i++) {
    if (cache.includes(upperCaseCities[i])) {
      time += 1;
      cache = cache.filter((city) => city !== upperCaseCities[i]);
      cache.push(upperCaseCities[i]);
    } else {
      time += 5;
      cache.push(upperCaseCities[i]);

      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }

  return time;
}

// sol2
// 테스트 11 〉	통과 (66.19ms, 42.9MB)
// 테스트 12 〉	통과 (0.21ms, 33.5MB)
// 테스트 13 〉	통과 (0.20ms, 33.5MB)
// 테스트 14 〉	통과 (0.27ms, 33.4MB)
// 테스트 15 〉	통과 (0.41ms, 33.5MB)
// 테스트 16 〉	통과 (0.28ms, 33.5MB)
// 테스트 17 〉	통과 (0.05ms, 33.5MB)
// 테스트 18 〉	통과 (0.54ms, 33.5MB)
// 테스트 19 〉	통과 (0.60ms, 33.5MB)
// 테스트 20 〉	통과 (0.57ms, 33.5MB)
function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];

  if (!cacheSize) {
    return cities.length * 5;
  }

  for (const city of cities) {
    const upperCity = city.toUpperCase();

    if (cache.includes(upperCity)) {
      time += 1;
      // 참조한 캐시가 있다 -> 해당 도시 제거 후 캐시 배열의 가장 마지막에 추가해줘야 한다.
      // 그래야 오랫동안 참조하지 않은 순으로 정열됨
      cache.splice(cache.indexOf(upperCity), 1);
      cache.push(upperCity);
      continue;
    }

    time += 5;
    cache.push(upperCity);

    if (cache.length > cacheSize) cache.shift();
  }

  return time;
}
