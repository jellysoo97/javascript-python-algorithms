# 로또
# 중복없이 숫자 6개 조합 구하기 
# 1. k, s를 인풋에서 구하고
# 2. itertools.combinations 이용해서 길이가 6인 조합을 구한다
# itertools.combinations(obj, len): 반복가능한 객체에서 지정된 길이의 조합을 생성
import sys
from itertools import combinations

sys.stdin = open("input.txt", "r")
input_lines = sys.stdin.readlines()

for line in input_lines:
  numbers = list(map(int, line.split()))
  k = numbers[0]

  if k > 0:
    s = numbers[1:]
    combos = list(combinations(s, 6))

    for combo in combos:
      # combo를 문자열로 변환 안하면 join type error 남
      # TypeError: sequence item 0: expected str instance, int found
      print(' '.join(map(str, combo)))
  
    print()