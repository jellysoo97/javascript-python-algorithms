// 몇번째인지가 중요
function solution(priorities, location) {
  const arr = priorities.map((priority, index) => ({ priority, index }));
  let index = 0;

  while (arr.length) {
    const front = arr.shift();

    // Array.some() : 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트
    // return boolean
    if (arr.some((item) => item.priority > front.priority)) {
      arr.push(front);
    } else {
      index++;

      if (front.index === location) {
        break;
      }
    }
  }

  return index;
}
