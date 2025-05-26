
from stack import Stack

class StringReverser:
    def reverse(self, input: str) -> str:
        stack = Stack(10)
        for char in input:
            stack.push(char)

        reversed_str = []
        while not stack.isempty():
            reversed_str.append(stack.pop())

        return "".join(reversed_str)

reverser = StringReverser()
print(reverser.reverse("hello")) # Output: olleh
print(reverser.reverse("JavaScript")) # Output: tpircSavaJ