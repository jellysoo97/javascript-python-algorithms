// sol1
// 구간마다 처음부터 더해나가서 매우 느림 -> O(nm)
// length : 3 -> front: 0일 때 0+1+2 -> front: 1일 때 1+2+3 -> ...
// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (28.28ms, 40.2MB)
// 테스트 3 〉	통과 (100.64ms, 43.8MB)
// 테스트 4 〉	통과 (241.48ms, 45.8MB)
// 테스트 5 〉	통과 (392.14ms, 52.5MB)
// 테스트 6 〉	통과 (592.91ms, 57MB)
// 테스트 7 〉	통과 (895.48ms, 63.8MB)
function solution(elements) {
  let length = 1;
  let front = 0;
  let sum = 0;
  let arr = [];

  while (length <= elements.length && front < elements.length) {
    for (let i = 0; i < length; i++) {
      sum += elements[(front + i) % elements.length];
    }

    arr.push(sum);
    sum = 0;
    front++;

    if (front >= elements.length) {
      front = 0;
      length++;
    }
  }

  arr = [...new Set(arr)];

  return arr.length;
}

// sol2
// sliding window algorithm을 이용하자
// https://velog.io/@dianestar/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%97%B0%EC%86%8D-%EB%B6%80%EB%B6%84-%EC%88%98%EC%97%B4-%ED%95%A9%EC%9D%98-%EA%B0%9C%EC%88%98-JavaScript-%EA%B5%90%EA%B3%B5-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%8A%A4%ED%84%B0%EB%94%94-48%EC%A3%BC%EC%B0%A8
// 구간의 길이가 정해져 있을 경우 구간의 합을 효율적으로 구할 수 있다
// 처음에는 구간의 길이만큼 모두 연산 -> O(n)
// 한 칸씩 윈도우를 밀 때 (이전 구간의 합) - (빠진 구간) + (새로 들어온 구간) -> O(1)
// 총 O(n)
// 테스트 1 〉	통과 (0.09ms, 33.6MB)
// 테스트 2 〉	통과 (9.28ms, 40.3MB)
// 테스트 3 〉	통과 (13.89ms, 42.9MB)
// 테스트 4 〉	통과 (18.61ms, 43.1MB)
// 테스트 5 〉	통과 (29.41ms, 47.9MB)
// 테스트 6 〉	통과 (36.13ms, 48.1MB)
// 테스트 7 〉	통과 (59.28ms, 53.5MB)
function solution(elements) {
  let set = new Set();

  for (let i = 1; i <= elements.length; i++) {
    let sum = 0;

    for (let j = 0; j < elements.length; j++) {
      if (j === 0) {
        sum = [...elements, ...elements]
          .splice(j, i)
          .reduce((acc, cur) => acc + cur);
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + i - 1) % elements.length];
      }

      set.add(sum);
    }
  }

  return set.size;
}
