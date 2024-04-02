// multiple pointer
function isSubsequence(str1, str2) {
  if (!str1) {
    return true;
  }

  // loop over str1
  // pointer = str2.indexOf(str)
  // pointer > str2.indexOf(str) return false
  let pointer = 0;

  for (const str of str1) {
    if (pointer > str2.indexOf(str)) {
      return false;
    }

    pointer = str2.indexOf(str);
  }

  return true;
}

function isSubsequence2(str1, str2) {
  // pointer i, j
  // loop over str2
  // str1[i] === str2[j]이면 i++, 다르면 j++
  // 근데 i === str1.length이면 return true
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
