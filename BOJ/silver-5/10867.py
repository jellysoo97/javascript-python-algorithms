# 중복 빼고 정렬하기
# 수 배열 만들기
# 집합으로 만들어서 중복제거 -> 다시 배열로 변환
# 배열 정렬해서 출력
n = int(input())
numbers = list(set(list(map(int, input().split()))))
numbers.sort()

for number in numbers:
  print(number, end=" ")