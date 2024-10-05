def solution(numbers):
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda num:(num*4)[:4], reverse=True)
    result = ''.join(numbers)
    print(numbers)
    
    if result[0] == '0':
        return '0'
    else:
        return result