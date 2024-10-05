def solution(s):
    stack = []
    
    for str in s:
        if str == '(':
            stack.append(str)
        else:
            if len(stack) > 0 and stack.pop() == '(':
                continue
            else:
                return False
    return len(stack) == 0