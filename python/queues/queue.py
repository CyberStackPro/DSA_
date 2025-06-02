class ArrayQueue:
    def __init__(self):
        self.items={}
        self.front_index=0
        self.rear_index=0
    def enqueue(self,item):
        self.items[self.rear_index] = item
        self.rear_index += 1
    def dequeue(self):
        if self.is_empty():
            raise Exception('Queue is empty')
        item = self.items[self.front_index]
        del self.items[self.front_index]
        self.front_index += 1
        return item
    def peek(self):
        if self.is_empty():
            raise Exception('Queue is empty')
        return self.items[self.front_index]
    def is_empty(self):
        return self.rear_index - self.front_index == 0
    def size(self):
        return self.rear_index - self.front_index
    def __str__(self):
        return str([self.items[i] for i in range(self.front_index, self.rear_index)])

q = ArrayQueue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

print(q)          # [10, 20, 30]
print(q.dequeue())  # 10
print(q)          # [20, 30]
print(q.peek())   # 20
