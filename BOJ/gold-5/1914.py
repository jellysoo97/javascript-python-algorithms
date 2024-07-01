# 하노이 탑
# 출력: 옮긴 횟수, N <= 20이면 이동 순서
# 1. n-1개의 원판을 from A to B로 이동시킨다, using C
# 2. 마지막 원판을 from A to C로 이동시킨다
# 3. n-1개의 원판을 from B to C로 이동시킨다, using A
n = int(input())

def hanoi_recursion(n, from_rod, to_rod, using_rod):
  # base case
  if n == 1:
    print(from_rod, to_rod)
    return
  # different input
  hanoi_recursion(n-1, from_rod, using_rod, to_rod)
  print(from_rod, to_rod)
  hanoi_recursion(n-1, using_rod, to_rod, from_rod)

print(2**n-1)

if n <= 20:
  hanoi_recursion(n, 1, 3, 2)