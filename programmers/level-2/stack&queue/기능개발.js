// sol1
function solution(progresses, speeds) {
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let queue = [days[0]];
  let cnt = [];

  for (let i = 1; i < days.length; i++) {
    // 쌓인 값 중 가장 큰 수와 days[i] 비교
    if (queue[0] < days[i]) {
      cnt.push(queue.length);
      queue = [];
    }

    queue.push(days[i]);
  }

  // queue에 남은 값들까지 고려해야 함
  queue.length && cnt.push(queue.length);

  return cnt;
}

// sol2
// index++ : index += 1을 하고 연산 전 값을 반환 ex) while(i++ < 5) console.log(i) -> 0<5, 1<5, 2<5, 3<5, 4<5 -> 1, 2, 3, 4, 5
// ++index : index += 1한 값을 반환 ex) while(i++ < 5) console.log(i) -> 1<5, 2<5, 3<5, 4<5 -> 1, 2, 3, 4
function solution(progresses, speeds) {
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];
  let index = 0;
  let answer = [0];

  for (let i = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[index] += 1;
    } else {
      maxDay = days[i];
      answer[++index] = 1;
    }
  }

  return answer;
}
