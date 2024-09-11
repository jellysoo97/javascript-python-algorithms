// 각 기능별 작업이 끝나기까지 남은 일수 계산
// 현재 남은 일수 <= 배포일 남은 일수면 기능 개수 + 1
// 아니면 배포일 업데이트
function solution(progresses, speeds) {
  let leftDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let deployDay = leftDays[0];
  let result = [0];

  leftDays.forEach((leftDay) => {
    if (leftDay <= deployDay) {
      result[result.length - 1]++;
    } else {
      deployDay = leftDay;
      result.push(1);
    }
  });

  return result;
}

solution([93, 30, 55], [1, 30, 5]);
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
