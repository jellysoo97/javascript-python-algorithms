function solution(priorities, location) {
  const arr = priorities;
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (index === location) {
      return index;
    }
  }
}
