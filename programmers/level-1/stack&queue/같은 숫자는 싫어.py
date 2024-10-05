def solution(arr):
    result = []
    
    for item in arr:
        if len(result) == 0 or (len(result) > 0 and result[len(result)-1] != item):
            result.append(item)
    
    return result