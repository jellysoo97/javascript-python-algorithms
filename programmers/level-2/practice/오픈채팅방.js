// 오픈채팅방
// 출력: 관리자가 보게 되는 메시지의 문자열 배열
// 들어오면 -> 닉네임 + 들어왔다는 메시지
// 나가면 -> 닉네임 + 나갔다는 메시지
// 닉네임 변경 -> 나갔다가 들어오기 or 들어온 상태에서 변경 -> 기존 메시지의 닉네임도 모두 변경
// members에 id - nickname 값 저장
// record loop
//  enter: members[id]님이 들어왔습니다 추가
//  leave: members[id]님이 나갔습니다 추가
function solution(records) {
  let members = {};
  let result = [];

  for (const record of records) {
    const [newLog, newId, newNickname] = record.split(" ");
    if (newLog === "Enter" || newLog === "Change") members[newId] = newNickname;
  }

  records.forEach((record) => {
    const [newLog, newId, _] = record.split(" ");

    if (newLog === "Enter") result.push(`${members[newId]}님이 들어왔습니다.`);
    else if (newLog === "Leave")
      result.push(`${members[newId]}님이 나갔습니다.`);
  });

  return result;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);
