def solution(citations):
    h = 0
    
    for i in range(max(citations)+1):
        over_count = sum(1 for x in citations if x >= i)
        if over_count >= i:
            h = i
            
    return h