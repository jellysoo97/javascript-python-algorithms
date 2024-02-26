function solution(msg) {
  // 1. 사전 초기화
  // key: 단어, value: 색인 번호
  let dict = Object.fromEntries(
    new Array(26)
      .fill()
      .map((_, index) => [String.fromCharCode(index + 65), index + 1])
  );
  let w = "";
  let c = "";
  let index = 0;
  let result = [];

  dict.lastNumber = 27;

  while (msg.length > 0) {
    // 2. 매 loop마다 w,c,index 초기화
    w = msg[0];
    c = msg[1];
    index = 0;

    // 3. w, c 찾기
    while (dict[w + msg[index + 1]]) {
      w += msg[index + 1];
      index++;
    }

    w = msg.slice(0, index + 1);
    c = msg.slice(index + 1, index + 2);

    // 4. w의 색인 번호 호출
    result.push(dict[w]);
    // 5. msg에서 w 제거
    msg = msg.slice(w.length);

    // c가 남아있다면 w+c 사전에 등록
    if (c) {
      dict[w + c] = dict.lastNumber++;
    }
  }

  return result;
}
