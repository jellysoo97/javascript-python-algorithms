// 하노이의 탑 tower of hanoi : O(2^n - 1) -> O(2^n)
// 1. n-1개의 원판을 from A to B로 이동시킨다, using C
// 2. 마지막 원판을 from A to C로 이동시킨다
// 3. n-1개의 원판을 from B to C로 이동시킨다, using A
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  // towerOfHanoi(n - 1, "A", "B", "C");
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // towerOfHanoi(n-1, 'B', 'C', 'A')
  towerOfHanoi(n - 1, toRod, usingRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
