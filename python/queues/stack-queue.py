import sys
from pathlib import Path

# Add the root directory to sys.path
root_dir = str(Path(__file__).resolve().parent.parent)
# print("SYSTEM",sys.path)
if root_dir not in sys.path:
    sys.path.append(root_dir)
# print("ROOT DIR",root_dir)
from stacks.stack import Stack


class QueueWithTwoStacks:
    def __init__(self, cap):
        self.stack1 = Stack(cap)
        self.stack2 = Stack(cap)

    def enqueue(self, item):
        self.stack1.push(item)

    def dequeue(self):
        if self.is_empty():
            raise Exception('Queue is Empty')
        if self.stack2.is_empty():
            while not self.stack1.is_empty():
                self.stack2.push(self.stack1.pop())
        return self.stack2.pop()

    def is_empty(self):
        return self.stack1.is_empty() and self.stack2.is_empty()

# Example usage
queue = QueueWithTwoStacks(5)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

print(queue.dequeue())  # Output: 10
print(queue.dequeue())  # Output: 20
