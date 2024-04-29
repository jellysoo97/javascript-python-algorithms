// dfs
function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  let dict = [];

  function dfs(cur, length) {
    if (vowels.length < length) {
      return;
    }

    dict.push(cur);

    // []  0
    // [ '' ] A 1
    // [ '', 'A' ] AA 2
    // [ '', 'A', 'AA' ] AAA 3
    // [ '', 'A', 'AA', 'AAA' ] AAAA 4
    // [ '', 'A', 'AA', 'AAA', 'AAAA' ] AAAAA 5
    // [ '', 'A', 'AA', 'AAA', 'AAAA', 'AAAAA' ] AAAAE 5
    // ['', 'A', 'AA', 'AAA', 'AAAA', 'AAAAA', 'AAAAE'] AAAAI 5
    // 길이 5까지 깊게 내려간 후 옆 노드(다른 모음) 돌고 다 돌면 위로 한 단계 올라가기(길이 - 1) 반복
    vowels.forEach((vowel) => dfs(cur + vowel, length + 1));
  }

  dfs("", 0);

  return dict.sort().indexOf(word);
}

solution("AAAAE");
solution("AAAE");
solution("I");
solution("EIO");
