// frequency counter
function sameFrequency(num1, num2) {
  // convert num to array
  const arr1 = num1.toString().split("");
  const arr2 = num2.toString().split("");

  // if length 다르면 early return
  if (arr1.length !== arr2.length) {
    return false;
  }

  // create object, key: num1 자릿수, value: 자릿수 count
  let obj = {};

  arr1.forEach((str) => (obj[str] = (obj[str] || 0) + 1));

  // loop over num2
  // object[str] 있으면 object[str]--, 없으면 return false
  for (const str of arr2) {
    if (!obj[str]) {
      return false;
    }

    obj[str]--;
  }

  return true;
}
