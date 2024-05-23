# 안전 영역
# 높이에 따른 안전영역 개수 구하고 -> 그 중 최대값 출력
# 그래프 생성
# 최대 높이 구하기
# 1 ~ 최대 높이 loop 돌면서 안전영역 개수 count
# 안전영역 개수 구하기
#   그래프 루프 돌면서
#   방문한 적 없고 && 안전한 영역이면
#     bfs: 상하좌우 인접한 영역까지 방문한 적 없는 안전한 영역인지 탐색
# 안전영역 개수 + 1 -> 인접한 영역까지 하나의 안전영역 덩어리니까 한번씩만 카운트
# 안전영역 개수 최대값 업데이트
from collections import deque

def bfs(x, y, height, graph, visited):
  n = len(graph)
  directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
  queue = deque([(x, y)])
  visited[x][y] = True

  while queue:
    cx, cy = queue.popleft()
    for dx, dy in directions:
      nx, ny = cx + dx, cy + dy
      if 0 <= nx < n and 0 <= ny < n and graph[nx][ny] > height and not visited[nx][ny]:
        visited[nx][ny] = True
        queue.append((nx, ny))

def count_safe_area(height, graph):
  n = len(graph)
  visited = [[False] * n for _ in range(n)]
  count = 0

  for i in range(n):
    for j in range(n):
      if graph[i][j] > height and not visited[i][j]:
        bfs(i, j, height, graph, visited)
        count += 1
  
  return count

n = int(input())
graph = list()
result = 0

for _ in range(n):
  graph.append(list(map(int, input().split())))

max_height = max(map(max, graph))

for height in range(max_height+1):
  result = max(result, count_safe_area(height, graph))

print(result)