# 회의실 배정
# 그리디 알고리즘
# loop마다 가장 빨리 끝나는 회의 찾기 -> 그러면 최대한 많은 회의 진행 가능
# 회의 리스트를 빨리 끝나는 순으로 정렬 -> 종료 시간 기준으로 오름차순
# 회의 리스트 loop
#   current_time <= 시작시간 이면 count+1 -> current_time = 종료시간
n = int(input())
meeting_list = list()
current_time, count = 0, 0

for _ in range(n):
  meeting_list.append(list(map(int, input().split())))

# [[1, 4], [4, 4], [3, 5], [4, 7], [3, 8], [5, 9], [6, 10], [8, 11], [8, 12], [2, 13], [13, 13]]
# 시작시간=종료시간인 회의가 있을 수 있다
# 종료시간이 같으면 시작시간이 빠른걸로 정렬해야 시작시간=종료시간인 회의를 뒤로 정렬 가능
meeting_list.sort(key=lambda x:(x[1], x[0]))

for meeting in meeting_list:
  start, end = meeting
  if current_time <= start:
    count += 1
    current_time = end

print(count)