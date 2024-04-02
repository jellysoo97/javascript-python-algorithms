// given two string
// write a function to determine if str2 is an anagram of the first
// anagram: word formed by rearranging the letters of another
// ex) iceman -> cinema
// sol: frequency counter -> use object
function validAnagram(str1, str2) {
  // str1, str2 length 다르면 early return
  if (str1.length !== str2.length) {
    return false;
  }

  // frequency counter 객체 생성
  // O(n)
  let counter = {};

  str1.split("").forEach((str) => (counter[str] = (counter[str] || 0) + 1));

  // loop over str2
  // str 없으면 return false, 있으면 counter[str] -= 1
  // O(n)
  for (const str of str2) {
    if (counter[str] > 0) {
      counter[str]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
