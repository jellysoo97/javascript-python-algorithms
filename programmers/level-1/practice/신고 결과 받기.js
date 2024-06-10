// 출력: 유저별 처리 결과 메일을 받은 횟수
// 1. report loop 돌면서
// 2.   유저가 신고한 유저를 정리하고
// 3.   유저별 신고 당한 횟수를 카운팅한다. 단, 동일 유저 여러번 신고는 1번으로 카운트
// 4. 유저 리스트 loop 돌면서
// 5.   신고 당한 횟수가 k이상인 유저의 수를 카운팅한다.
function solution(id_list, report, k) {
  let countReport = {};
  let userReport = {};
  let result = [];
  report = [...new Set(report)];

  for (const item of report) {
    const [user, badUser] = item.split(" ");
    userReport[user]
      ? userReport[user].push(badUser)
      : (userReport[user] = [badUser]);
    countReport[badUser]
      ? (countReport[badUser] += 1)
      : (countReport[badUser] = 1);
  }

  for (const user of id_list) {
    if (!userReport[user]) {
      result.push(0);
      continue;
    }

    result.push(
      userReport[user].filter((reportUser) => countReport[reportUser] >= k)
        .length
    );
  }

  return result;
}
