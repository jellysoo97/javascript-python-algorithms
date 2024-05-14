# 1. len(goal) > 0이면 loop
# 2. goal.pop(0)이랑 같은 값을 pop
# 3. 같은 값이 없으면 No 반환
# 4. loop 나오면 Yes 반환
def solution(cards1, cards2, goal):
  while len(goal) > 0:
    goal_str = goal.pop(0)

    if len(cards1) > 0 and cards1[0] == goal_str:
      cards1.pop(0)
    elif len(cards2) > 0 and cards2[0] == goal_str:
      cards2.pop(0)
    else:
      return "No"
  
  return "Yes"