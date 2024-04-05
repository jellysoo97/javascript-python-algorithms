// sol1
function isPalindrome(str) {
  if (str.length % 2 === 0) return false;

  if (str.length === 1) return true;

  let result;

  function check(str) {
    if (str.length === 1) {
      result = true;
      return;
    }

    str[0] === str[str.length - 1]
      ? check(str.slice(1, str.length - 1))
      : (result = false);
  }

  check(str);

  return result;
}

// sol2
function isPalindrome(str) {
  if (str.length === 1) return true;

  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

  return false;
}

console.log(isPalindrome("amanaplanacanalpanama"));
console.log(isPalindrome("amanaplanacanalpandemonium"));
