# 베스트셀러
# 1. 책 개수를 담는 딕셔너리 만들고
# 2. 딕셔너리를 정렬하고
# 3. value가 최대인 key 값 반환
import sys

sys.stdin = open("input.txt", "r")
  
n = int(sys.stdin.readline().strip())
book_dict = {}

for _ in range(n):
  book = sys.stdin.readline().strip()

  if book in book_dict:
    book_dict[book] += 1
  else:
    book_dict[book] = 1

# sorted: 키가 사전순으로 정렬된 리스트 반환
# max(arg1, arg2): arg1 -> 최대값 구할 인자, arg2 -> 최대값을 결정하는 기준
# book_dict.get = book_dict[key] -> 최대 value를 가지는 key 반환
print(max(sorted(book_dict), key=book_dict.get))
