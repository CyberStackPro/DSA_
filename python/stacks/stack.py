
class Stack:
    def __init__(self,cap):
        self.cap=cap
        self.data=[None] * cap
        self.top = -1
    def push(self,item):
        if self.is_full():
            raise OverflowError("Stack is full")
        self.top += 1
        self.data[self.top] = item
        # print(f"Pushed {item} to stack")
    def pop(self):
        if self.top <0:
            print("Stack Underflow")
            return 0
        popped = self.data[self.top]
        self.top -= 1
        return popped
    def peek(self):
        if self.top<0:
            print("Stack is Empty")
            return 0
        return self.data[self.top]
    def reverse(self):
        prev = self.top
        curr = self.top
        curr = curr
    def is_empty(self):
        return self.top == -1
    def is_full(self):
        return self.top == self.cap -1
    def size(self):
        return len(self.data)
    def display(self):
        if self.is_empty():
            print("Stack is empty")
            return
        print("Stack contents (top to bottom):")
        for i in range(self.top, -1, -1):
            print(f"  {self.data[i]}")
if __name__ == "__main__":
    stack = Stack(5)
    stack.push(10)
    stack.push(20)
    stack.push(30)
    stack.push(40)
    stack.push(50)
    
    print(stack.peek())
    print(stack.data)
    stack.display()
    
    # apple_price = 0.50
    # banana_price = 0.30
    # orange_price = 0.75
    
    # num_apples = 3
    # num_bananas = 2
    # num_oranges = 1
    
    # print((num_apples * apple_price)+(banana_price * num_bananas) + (num_oranges *orange_price))
    