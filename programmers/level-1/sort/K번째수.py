def solution(array, commands):
    result = []
    
    for [i, j, k] in commands:
        arr = array[i-1:j]
        arr.sort()
        result.append(arr[k-1])
    
    return result