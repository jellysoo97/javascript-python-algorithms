# 숫자 카드2
# 1. {key: 숫자, value: 숫자 개수} 객체 생성
# 2. loop 돌면서 숫자 개수 출력
from collections import Counter

n = int(input())
cards = list(map(int, input().split()))
m = int(input())
arr = list(map(int, input().split()))
# Counter(cards): {[card]: card count} 딕셔너리 리턴
count = Counter(cards)
result = list()

# Counter로 대체 가능
# for card in cards:
#   if (card in count):
#     count[card] += 1
#   else:
#     count[card] = 1

for elem in arr:
  if (elem in count):
    result.append(count[elem])
  else:
    result.append(0)

# 한줄 출력
print(result, end=' ')