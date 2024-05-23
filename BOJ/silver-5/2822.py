# 점수 계산
# 점수 배열 만들기
# 총 점수 출력
# 배열 내림차순 정렬해서 앞에서 5개만 출력
scores = list()

for i in range(8):
  scores.append([i+1, int(input())])

scores.sort(key=lambda x: x[1], reverse=True)
best_scores = scores[:5]
best_scores.sort(key=lambda x:x[0])

print(sum([value[1] for value in best_scores]))

for best_score in best_scores:
  print(best_score[0], end=" ")