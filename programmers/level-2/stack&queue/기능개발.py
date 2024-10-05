import math

def solution(progresses, speeds):
    left_days = [math.ceil((100 - x) / speeds[i]) for i, x in enumerate(progresses)]
    deploy_day = left_days[0]
    result = [0]
    
    for left_day in left_days:
        if left_day <= deploy_day:
            result[len(result)-1] += 1
        else:
            deploy_day = left_day
            result.append(1)

    return result