function solution(files) {
  return files.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();

    // 1. num 걸러내기
    // a.replace(/\D/g, "")가 안되는 이유: tail에 숫자가 들어가는 경우까지 포함됨
    const numA = a.match(/\d{1,5}/)[0];
    const numB = b.match(/\d{1,5}/)[0];
    // 2. head 걸러내기, tail은 신경 쓸 필요 없음
    const [headA] = a.split(numA);
    const [headB] = b.split(numB);

    // head가 같으면 num 비교
    if (headA === headB) {
      if (parseInt(numA) === parseInt(numB)) return 0;

      return parseInt(numA) < parseInt(numB) ? -1 : 1;
    }

    // head가 다르면 head 비교
    return headA < headB ? -1 : 1;
  });
}

console.log(solution(["f-10.a", "f-10.c", "f-10.b"]));
