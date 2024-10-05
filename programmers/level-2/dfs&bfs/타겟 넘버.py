count = 0

def dfs(numbers, target, current, index):
    global count
    if index == len(numbers):
        if current == target:
            count += 1
        return
    else:
        dfs(numbers, target, current+numbers[index], index+1)
        dfs(numbers, target, current-numbers[index], index+1)

def solution(numbers, target):
    dfs(numbers, target, 0, 0)
    
    return count