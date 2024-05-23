# 숨바꼭질
# 문제
# 1. 1번과 가장 멀리 떨어진 헛간을 찾고
# 2. 그 헛간까지의 거리를 구하고
# 3. 같은 거리의 다른 헛간 개수를 구한다
# 풀이
# 그래프 생성 -> 1-n loop 돌면서 n 헛간에서 갈 수 있는 헛간 리스트
# bfs로 1번 헛간 - n번 헛간 거리 구하기
#   방문할 노드 큐가 다 빌 때까지 loop
#   현재 노드 = 큐.popleft()
#   현재 노드의 인접 노드들 방문 loop
#   인접노드 방문한 적 없으면 거리 구하고 큐에 추가
#   인접노드의 start까지의 거리 = 현재 노드의 start까지 거리 + 1
# 1-n번 헛간의 1번 헛간까지의 거리 리스트
from collections import deque

n,m = map(int, input().split())
graph = [[] for _ in range(n+1)]

for _ in range(m):
  a,b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

def bfs(start, n, graph):
  distances = [-1] * (n+1)
  distances[start] = 0
  queue = deque([start])

  # [-1, 0, -1, -1, -1, -1, -1, -1]
  while queue:
    current = queue.popleft()
    for near_node in graph[current]:
      # 방문한 적 없는 노드면
      if distances[near_node] == -1:
        # 근접 노드까지의 거리 = 현재 노드까지의 거리 + 1 -> graph[current]는 현재 노드까지의 거리가 1인 노드 모음이니까
        distances[near_node] = distances[current] + 1
        queue.append(near_node)
  
  return distances

distances = bfs(1, n, graph)
max_distance = max(distances)
max_nodes = [i for i, distance in enumerate(distances) if distance == max_distance]

print(min(max_nodes), max_distance, len(max_nodes))