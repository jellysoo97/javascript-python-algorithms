function solution(participant, completion) {
  // list 객체, key는 name, value는 count
  let list = {};

  // loop for participant
  // list 객체에 없으면 1, 있으면 count+1
  participant.forEach((p) =>
    list[p] ? (list[p] = list[p] + 1) : (list[p] = 1)
  );

  // loop for completion
  // list 객체에 있는데 count >= 1이면 count - 1
  completion.forEach((p) => list[p] >= 1 && list[p]--);

  // list에서 count > 0인 name return
  return Object.entries(list).filter(([_, count]) => count > 0)[0][0];
}
