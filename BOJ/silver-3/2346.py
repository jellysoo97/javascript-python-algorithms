# 풍선 터뜨리기
# deque -> (원래 순서, 풍선값)
# deque loop 돌면서
#   현재 풍선 꺼내고
#   터뜨린 풍선 결과에 넣고
#   deque 남아있으면
#     현재 풍선값만큼 회전시키기
#     양수면 왼쪽으로 value - 1만큼 회전
#     음수면 오른쪽으로 value만큼 회전
from collections import deque

n = int(input())
balloons = list(map(int, input().split()))
queue = deque((index+1, balloons[index]) for index in range(n))
result = list()

while queue:
  n, value = queue.popleft()
  result.append([n, value])

  if queue:
    if value > 0:
      queue.rotate(-(value - 1))
    else:
      queue.rotate(-value)

for n, _ in result:
  print(n, end=" ")