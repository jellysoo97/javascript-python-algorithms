// sol1
function reverse(str) {
  // base case
  if (!str.length) return "";

  // different input
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// sol2
// reverse sol1
function reverse(str) {
  if (str.length <= 1) return str;

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome"));
