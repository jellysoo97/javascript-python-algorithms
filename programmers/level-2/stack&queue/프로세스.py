def solution(priorities, location):
    priorities = list(map(list, enumerate(priorities)))
    queue = []
    
    while len(priorities) > 0:
        if priorities[0][1] < max(x[1] for x in priorities):
            priorities.append(priorities.pop(0))
        else:
            queue.append(priorities.pop(0))
    
    for i, item in enumerate(queue):
        if item[0] == location:
            return i+1