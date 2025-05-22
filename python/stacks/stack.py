class Stack:
    def __init__(self,cap):
        self.cap=cap
        self.data=[0] * cap
        self.top = -1
    def push(self,item):
        self.top += 1
        self.data[self.top] = item

stack = Stack(10)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

print(stack.data)

apple_price = 0.50
banana_price = 0.30
orange_price = 0.75

num_apples = 3
num_bananas = 2
num_oranges = 1

print((num_apples * apple_price)+(banana_price * num_bananas) + (num_oranges *orange_price))
