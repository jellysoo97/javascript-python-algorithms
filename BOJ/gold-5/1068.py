# 트리
# 1. 트리를 만들고 2. 주어진 노드 지우고 3. 리프 노드 개수 출력
# 1. 트리 만들기
#   트리를 직접 만들기보다는 지울 노드 찾기
#   주어진 입력 그대로 트리로 사용
# 2. 노드 지우기 -> dfs
#   지울 노드에 이상한 값 넣기
#   지울 노드의 자식 찾기
#     tree loop 돌면서 delete_node와 같은 값 가진 = delete_node를 부모로 가진 노드면
#       dfs(index) -> index의 자식도 지우기
#   그러면 지워야 하는 노드에 이상한 값들이 들어가 있음
# 3. 리프 노드 개수 출력
#   이상한 값이 아니고 tree에 있지 않은(tree = 부모 리스트) 인덱스값 출력
#   트리에 없다 = 부모가 없다
n = int(input())
tree = list(map(int, input().split()))
delete_node = int(input())
count = 0

# [-1, 0, 0, 1, 1]
def dfs(delete_node):
  tree[delete_node] = -2

  for index in range(n):
    if tree[index] == delete_node:
      dfs(index)

dfs(delete_node)

for index in range(n):
  if tree[index] != -2 and index not in tree:
    count += 1

print(count)