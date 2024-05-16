# 1. stages loop 돌면서 스테이지별 멈춰있는 사용자 수 stage_count에 담기
# 2. 실패율 계산
#    스테이지에 도달했으나 아직 클리어하지 못한 사용자 수 = 멈춰있는 사용자 수 = stage_count[stage]
#    스테이지에 도달한 플레이어 수 = 현재 스테이지 이상에 멈춰있는 사용자 수 합 = sum(stage_count[stage:])
# 3. 스테이지에 도달한 유저가 없으면 실패율 0
# 4. 실패율 배열 내림차순 정렬: stage 0, stage N+1 슬라이싱 -> 실패율 기준으로 내림차순 정렬
def solution(N, stages):
  stage_count, failure_rate = [0] * (N+2), [0] * (N+2)

  for stage in stages:
    stage_count[stage] += 1
  # [0, 1, 3, 2, 1, 0, 1]
  
  for stage, _ in enumerate(stage_count):
    if stage <= N:
      pass_count = sum(stage_count[stage:])

      # 스테이지에 도달한 유저가 없는 경우 생각 안했더니 ZeroDivisionError
      if pass_count == 0:
        failure_rate[stage] = 0
      else:
        failure_rate[stage] = stage_count[stage] / pass_count

  failure_rate = list(enumerate(failure_rate))[1:-1]
  failure_rate.sort(key=lambda x:x[1], reverse=True)
  result = [stage for stage, _ in failure_rate]
  print(result)
  
  return result

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
solution(4, [4,4,4,4,4])
solution(3, [0, 0, 0, 0])



