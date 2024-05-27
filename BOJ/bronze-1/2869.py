# 달팽이는 올라가고 싶다
# sol1 -> 시간초과 -> 당연..
# V-A 높이까지 가는데 걸리는 일수 + 1 구하기
# 하루동안 올라갈 수 있는 높이 = A - B
# 현재 높이 <= V-A이면
#   현재 높이 += 하루동안 올라갈 수 있는 높이
#   일수 + 1
# a, b, v = map(int, input().split())
# height_per_day = a - b
# current_height, result = 0, 0

# while current_height < v - a:
#   current_height += height_per_day
#   result += 1

# print(result+1)

# sol2
# (v-a 높이까지 가는데 걸리는 일수) + 1 구하기
# v-a까지 가는데 걸리는 일수 = math.ceil((v-a) / (a-b))
import math

a, b, v = map(int, input().split())
result = math.ceil((v-a) / (a-b)) + 1

print(result)