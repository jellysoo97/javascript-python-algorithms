// sol1
// 테스트 1 〉	통과 (26.52ms, 35.4MB)
// 테스트 2 〉	통과 (1961.14ms, 36.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (257.21ms, 36.6MB)
// 테스트 5 〉	통과 (3364.61ms, 37MB)
function solution(bridge_length, weight, truck_weights) {
  // 다리 위의 상황은 큐
  let queue = Array(bridge_length).fill(0);
  let time = 0;

  while (truck_weights.length) {
    time++;
    // 트럭이 1초에 1씩 갈 수 있으니까 큐에도 1초에 하나씩 요소가 빠지고 추가됨
    queue.shift();

    // 큐가 대기트럭 감당 가능한지 확인
    if (queue.reduce((acc, cur) => acc + cur, 0) + truck_weights[0] <= weight) {
      // 가능하면 큐에 넣고
      queue.push(truck_weights.shift());
    } else {
      // 불가능하면 0 추가해서 시간 흘려보내기 -> 트럭 무게가 10이라면 [0,10] -> [10, 0] -> [10, 0, 0] -> ...
      // 이런 식으로 10이 빠져나가는 시간까지 반복
      queue.push(0);
    }
  }

  // 다리에 남아있는 트럭이 나가는데 걸리는 시간 더해주기
  return time + bridge_length;
}

// sol2
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.18ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.39ms, 33.7MB)
// 테스트 5 〉	통과 (0.36ms, 33.6MB)
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  // 다리 위 트럭 무게 총합
  let total = 0;
  let queue = [{ weight: 0, doneTime: 0 }];

  while (truck_weights.length) {
    // 현재 시간이 다리 위에 있는 트럭의 doneTime이면
    // 1. 해당 트럭을 큐에서 빼주고
    // 2. total에서 해당 트럭의 무게도 빼준다
    if (time === queue[0].doneTime) {
      total -= queue.shift().weight;
    }

    if (total + truck_weights[0] <= weight) {
      // 다리가 대기 트럭을 감당 가능하면
      // 1. 대기열에서 뺀 후에 큐에 넣어주고
      // 2. total에 대기 트럭의 무게도 더해준다
      queue.push({
        weight: truck_weights[0],
        doneTime: time + bridge_length,
      });
      total += truck_weights.shift();
      // 감당 못하면
      // 시간을 큐에 있는 트럭이 다리에서 빠져나가는 시간으로 점프시킨다
      // if문 밖에서 1초 더해주니까 미리 빼준다
    } else {
      time = queue[0].doneTime - 1;
    }

    time++;
  }

  return time + bridge_length;
}
