# bfs (너비우선탐색)
# 1. 방문할 노드 큐와 방문한 노드 체크하는 리스트
# 2. 방문할 노드 큐가 있으면 loop
# 3. 가장 먼저 들어온 노드 방문
# 4. 노드의 값 == y이면 depth를 리턴
# 5. 아니면 다음 depth 큐에 추가 -> 추가된 노드 방문 처리
from collections import deque

# sol1 - 87.5% 테스트케이스 9, 10 시간초과
# visited[cur_num] = True 수정
# 뺀 노드를 방문 처리하면 안되고 추가한 노드를 방문 처리해야 함
# def solution(x, y, n):
#   queue = deque()
#   queue.append((x, 0))
#   visited = [False for _ in range(y+1)]
#   visited[x] = True
  
#   while queue:
#     cur_num, depth = queue.popleft()
#     visited[cur_num] = True

#     if cur_num == y:
#       return depth
#     elif cur_num < y:
#       next_num_list = [cur_num + n, cur_num * 2, cur_num * 3]
#       for next_num in next_num_list:
#         if next_num <= y and not visited[next_num]:
#           queue.append((next_num, depth+1))

#   return -1

# sol2
def solution(x, y, n):
  queue = deque()
  queue.append((x, 0))
  visited = [False for _ in range(y+1)]
  visited[x] = True
  
  while queue:
    cur_num, depth = queue.popleft()

    if cur_num == y:
      return depth
    elif cur_num < y:
      next_num_list = [cur_num + n, cur_num * 2, cur_num * 3]
      for next_num in next_num_list:
        if next_num <= y and not visited[next_num]:
          queue.append((next_num, depth+1))
          visited[next_num] = True

  return -1


print(solution(10, 40, 5))