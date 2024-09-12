// sol1
// 우선순위 shift -> 우선순위 비교
// 가장 높은 우선순위면 실행 스택에 push
// 아니면 우선순위 tail에 push
function solution(priorities, location) {
  let arr = priorities.map((priority, index) => [priority, index]);
  let stack = [];

  while (stack.length < priorities.length) {
    const cur = arr.shift();

    if (Math.max(...arr.map(([priority]) => priority)) <= cur[0])
      stack.push(cur);
    else arr.push(cur);
  }

  return stack.indexOf(stack.find(([_, index]) => index === location)) + 1;
}

// sol2
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

solution([2, 1, 3, 2]);
solution([1, 1, 9, 1, 1, 1]);
