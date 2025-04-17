from quopri import HEX
from test.test_bufio import lengths

# def convert_to_binary(n):
#     return bin(n)[2:]
# def convert_to_hex(n):
#         return hex(n)[2:]
# print(convert_to_binary(42))  # Output: 101010
# print(convert_to_hex(42))

# def contiguous_subsequences(arr):
#     n = len(arr)
#     subsequences = []
#     for i in range(n):
#         for j in range(i, n):
#             subsequences.append(arr[i:j+1])  # Take elements from i to j
#     return subsequences

# # Example usage
# arr = [1, 2, 3]
# # print(contiguous_subsequences(arr))
# # Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]

# arr = [1, 2, 3, 4, 5]

# # Generate all contiguous subsequences:
# n = len(arr)
# # print('Length N',n)
# for start in range(n):
#     for end in range(start + 1, n + 1):
#         # print(arr[start:end])

# # Output:
# # [1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5],
# # [2], [2,3], [2,3,4], [2,3,4,5],
# # [3], [3,4], [3,4,5],
# # [4], [4,5],
# # [5]

# def merge_sort(arr):
#     if len(arr) <= 1:
#         return arr

#     mid = len(arr)
#     left = arr[:mid]
#     right = arr[mid:]


#     left = merge_sort(left)
#     right = merge_sort(right)

#     return merge(left, right)


# def merge(left, right):
#     result = []
#     i = 0
#     j = 0

#     while i < len(left) and j < len(right):
#         if left[i] <= right[j]:
#             result.append(left[i])
#             i += 1
#         else:
#             result.append(right[j])
#             j += 1

#     return result + left[i:] + right[j:]

# for row in range(8):
#     pattern = ' '
#     for col in range(8):
#         if ((row + col) % 2 == 0):
#             pattern += ' '
#         else:
#             pattern += '#'
#     print(pattern)

# class Array:
#     def __init__(self, size):
#         self.size = size
#         self.arr = [None] * size

#     def __getitem__(self, index):
#         if 0 <= index < self.size:
#             return self.arr[index]
#         else:
#             raise IndexError('Index out of range')
#     def __setitem__(self, index, value):
#         if 0 <= index < self.size:
#             self.arr[index] = value
#         else:
#             raise IndexError('Index out of range')
#     def __len__(self):
#         return self.size

#     # def __iter__(self):
#     #     return iter(self.arr)

#         def __str__(self):
#             return str(self.arr)

#     # def __repr__(self):
#     #     return repr(self.arr)

# if __name__ == '__main__':
#     arr = Array(5)
#     arr[0] = 1
#     arr[1] = 2
#     arr[2] = 3
#     arr[3] = 4
#     arr[4] = 5
#     print(arr[0])  # Output: 1
#     print(arr[1])  # Output: 2
#     print(arr[2])  # Output: 3
#     print(arr[3])  # Output: 4
#     print(arr[4])  # Output: 5
#     print(len(arr))  # Output: 5
#     # print(list(arr))  # Output: [1, 2, 3, 4, 5]
#     print(arr)  # Output: [1, 2, 3, 4, 5]
# # matrix = [
# #     [1, 2, 3],
# #     [4, 5, 6],
# #     [7, 8, 9]
# # ]
# # for row in matrix:
# #     for col in row:
# #         print(col)
# # print(matrix)

# # x = set(("apple", "banana", "cherry","banana"))
# # print(x)
# # print(type(x))

# def find_max(arr):
#     for i in range(0, len(arr)):
#         if arr[i] > arr[0]:
#             arr[0] = arr[i]
#     return arr[0]
# print(find_max([1,2,5,3,4,6,8]))
# # for i in range(0, 10):
# #     print(i)
# #     if i == 5:
# #         break

# class CustomArray:
#     def __init__(self,size) -> None:
#         self.size = size
#         self.arr = [None] * size
#     def __setitem__ (self,index,value):
#         self.arr[index]= value
#         # def __setitem__(self, index, value):
#         #     if 0 <= index < self.size:
#         #         self.arr[index] = value
#         #     else:
#         #         raise IndexError('Index out of range')
#     def __getitem__ (self, index):
#         return self.arr[index]
#     def __len__(self):
#         return self.size
#     def __str__ (self):
#         return str(self)
# # if __name__ == '__main__':
# #     arr2 = CustomArray(5)
# #     arr2[0] = 1
# #     arr2[1] = 2
# #     arr2[2] = 3
# #     arr2[3] = 4
# #     arr2[4] = 5
# #     print('Array2',arr2[0])  # Output: 1
# #     print('Array2',arr2[1])  # Output: 2
# #     # print(arr[2])  # Output: 3
# #     # print(arr[3])  # Output: 4
# #     # print(arr[4])  # Output: 5
# #     print(len(arr2))  # Output: 5

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for idx, n in enumerate(numbers):
    print(n, idx)

# Below is a very detailed explanation of Kadane’s algorithm, sometimes called the "Maximum Subarray Problem" algorithm. Kadane’s algorithm finds the contiguous subarray within a one‐dimensional array of numbers that has the largest sum. (Sometimes people refer to it as solving the “continuous array” problem.) We’ll go through the algorithm step by step, explain each iteration and variable, and then show you an example.

# ────────────────────────
# The Problem:
# ────────────────────────
# Given an array (which may include negative and positive numbers), the goal is to find a contiguous subarray (i.e., a series of elements that appear consecutively) such that its sum is as large as possible.

# ────────────────────────
# What Kadane’s Algorithm Does:
# ────────────────────────
# The algorithm keeps track of two main values as it scans through the array:
# 1. currentSum – The maximum subarray sum that ends at the current element.
# 2. maxSum – The maximum sum found so far over all subarrays.

# How it works:
# • Initially, you set both currentSum and maxSum to the first element of the array.
# • Then, for each subsequent element in the array, you decide: should we continue the current subarray (by adding the current element) or start a new subarray using the current element alone?
# Mathematically, update currentSum = max(current element, currentSum + current element).

# • After updating currentSum for the current element, update maxSum = max(maxSum, currentSum) if the new currentSum is greater.

# ────────────────────────
# Step-by-Step Detailed Example:
# ────────────────────────
# Consider the array:
#      A = [-2, -3, 4, -1, -2, 1, 5, -3]

# We initialize:
#    currentSum = A[0] = -2
#    maxSum     = -2

# Now, we iterate from the second element onward:

# Iteration 1 (i = 1, current element = -3):
#    • Decide: should I add -3 to currentSum (-2) or start new at -3?
#          currentSum + (-3) = -2 + (-3) = -5
#          Starting new with -3 = -3
#          Choose the maximum: max(-3, -5) = -3.
#    • So, currentSum becomes -3.
#    • Now update maxSum: max(-2, -3) = -2.
#    (After i=1: currentSum = -3, maxSum = -2)

# Iteration 2 (i = 2, current element = 4):
#    • Decide: add 4 to currentSum (-3) or just start new with 4?
#          currentSum + 4 = -3 + 4 = 1
#          Starting new with 4 = 4
#          Maximum is 4.
#    • So, currentSum is updated to 4.
#    • Update maxSum: max(-2, 4) = 4.
#    (After i=2: currentSum = 4, maxSum = 4)

# Iteration 3 (i = 3, current element = -1):
#    • Decide: add -1 to currentSum (4) or start new with -1?
#          currentSum + (-1) = 4 - 1 = 3
#          Starting new with -1 = -1
#          Maximum is 3.
#    • So, currentSum becomes 3.
#    • Update maxSum: max(4, 3) = 4 (still).
#    (After i=3: currentSum = 3, maxSum = 4)

# Iteration 4 (i = 4, current element = -2):
#    • Decide: add -2 to currentSum (3) or start new with -2?
#          currentSum + (-2) = 3 - 2 = 1
#          Starting new with -2 = -2
#          Maximum is 1.
#    • So, currentSum becomes 1.
#    • Update maxSum: max(4, 1) = 4.
#    (After i=4: currentSum = 1, maxSum = 4)

# Iteration 5 (i = 5, current element = 1):
#    • Decide: add 1 to currentSum (1) or start new with 1?
#          currentSum + 1 = 1 + 1 = 2
#          Starting new with 1 = 1
#          Maximum is 2.
#    • So, currentSum becomes 2.
#    • Update maxSum: max(4, 2) = 4.
#    (After i=5: currentSum = 2, maxSum = 4)

# Iteration 6 (i = 6, current element = 5):
#    • Decide: add 5 to currentSum (2) or start new with 5?
#          currentSum + 5 = 2 + 5 = 7
#          Starting new with 5 = 5
#          Maximum is 7.
#    • So, currentSum is updated to 7.
#    • Update maxSum: max(4, 7) = 7.
#    (After i=6: currentSum = 7, maxSum = 7)

# Iteration 7 (i = 7, current element = -3):
#    • Decide: add -3 to currentSum (7) or start new with -3?
#          currentSum + (-3) = 7 - 3 = 4
#          Starting new with -3 = -3
#          Maximum is 4.
#    • So, currentSum becomes 4.
#    • Update maxSum: max(7, 4) = 7.
#    (After i=7: currentSum = 4, maxSum = 7)

# ────────────────────────
# Conclusion:
# ────────────────────────
# At the end of the iterations, maxSum holds the value 7. This means the maximum sum of any contiguous subarray in the array A is 7.
# In this example, the subarray that produces this sum is [4, -1, -2, 1, 5] which indeed sums to 7.

# ────────────────────────
# Pseudo Code Summary:
# ────────────────────────
# 1. Set currentSum = A[0] and maxSum = A[0].
# 2. For each element A[i] from i = 1 to end of A:
#      currentSum = max(A[i], currentSum + A[i])
#      maxSum = max(maxSum, currentSum)
# 3. Return maxSum as the maximum subarray sum.

# ────────────────────────
# JavaScript Implementation:
# ────────────────────────
# function kadanesAlgorithm(arr) {
#   if (arr.length === 0) {
#     throw new Error("Array must have at least one element.");
#   }

#   let currentSum = arr[0];
#   let maxSum = arr[0];

#   // Loop through the array starting with the second element
#   for (let i = 1; i < arr.length; i++) {
#     // Decide whether to add the current element to the existing subarray or start a new subarray.
#     currentSum = Math.max(arr[i], currentSum + arr[i]);

#     // Update maxSum if currentSum became larger.
#     maxSum = Math.max(maxSum, currentSum);

#     // Detailed logging for each iteration:
#     console.log("Iteration", i,
#                 "Current Element:", arr[i],
#                 "Current Sum:", currentSum,
#                 "Max Sum:", maxSum);
#   }

#   return maxSum;
# }

# // Example usage:
# const array = [-2, -3, 4, -1, -2, 1, 5, -3];
# console.log("Maximum Subarray Sum is:", kadanesAlgorithm(array));
# ────────────────────────
# Final Notes:
# ────────────────────────
# • In each iteration, by comparing arr[i] with currentSum + arr[i], we decide if it’s better (in terms of sum) to start over with the current element or to continue accumulating the previous sum.
# • The algorithm runs in O(n) time complexity and O(1) space, making it very efficient for this problem.
# • Kadane’s algorithm only computes the maximum sum; if you need the actual subarray, you can add extra variables (like start and end indices) to track where the current best subarray starts and ends.

# This comprehensive step-by-step explanation should help clarify Kadane’s algorithm, what it does during each iteration, and how it solves the “maximum contiguous subarray sum” problem.

class Node:
    def __init__(self,data=None,next=None):
        self.data = data
        self.next = next
class LinkedList:
    def __init__(self):
        self.head = None
    def insert_at_begining(self,data):
        node = Node(data,self.head)
        self.head = node
    def print(self):
        if self.head is None:
            print('Linked is Empty')
            return
        itr = self.head
        llstr = ''

        while itr:
            llstr += str(itr.data) + '--->'
            itr = itr.next
        print(llstr)
    def insert_at_end(self, data):
        if self.head is None:
            self.head = Node(data, None)
            return
        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = Node(data, None)
    def insert_values(self,data_list):
        self.head = None
        for data in data_list:
            self.insert_at_begining(data)
    def length(self):
        count = 0
        itr = self.head
        while itr:
           count += 1
           itr = itr.next
        return count
    def remove_at(self,index):
        if index <0 or index >= self.length():
            raise Exception('Invalid index')
        if index == 0:
            self.head = self.head.next;
            return
        count = 0
        itr = self.head
        while itr:
            if count == index - 1:
                itr.next = itr.next.next
                break
            itr = itr.next
            count += 1
    def insert_at(self,index,data):
        if index <0 or index >= self.length():
            raise Exception('Invalid index')
        if index == 0:
            self.insert_at_begining(data)
        count = 0;
        itr = self.head
        while itr:
            if count ==  index -1:
                node = Node(data, itr.next)
                itr.next = node
                break
            itr = itr.next
            count += 1

if __name__ == '__main__':
    ll = LinkedList()
    # ll.insert_at_begining(1)
    # ll.insert_at_begining(2)
    # ll.insert_at_begining(3)
    # ll.insert_at_end(90)
    # ll.insert_at_end(100)
    # ll.insert_at_end(200)
    # ll.insert_values(['banana','mango','grapes','oranges'])
    # ll.print()
    # ll.remove_at(2)
    # ll.insert_at(0,'jock')
    # ll.print()

    # print("Length:", ll.length())


# def titleCase(str):
#     words = str.lower().split(' ')
#     for i in range(len(words)):
#         words[i] = words[i][0].upper() + words[i][1:]
#     return ' '.join(words)
    # for i in range(len(words)):
    #     words[i] = words[i].capitalize()
    # return ' '.join(words)

# print(titleCase('Im a little tea pot'))

# def reverseString(str):
#     words = str.lowercase.split(' ')
#     for i in range(len(words)):
#         words[i] = words[i][::-1]
#     return ' '.join(words)

class MyNode:
    def __init__(self,value=None,next=None):
        self.value = value
        self.next=next
class MyLinkedList:
    def __init__(self):
        self.head = None
        self.tail=None
        self.size=0
    def addFirst(self,item):
        newNode = MyNode(item)
        if self.head == None or self.tail == None:
            self.head = self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        self.size +=1
    def addLast(self,item):
        newNode = MyNode(item)
        if self.isEmpty():
            self.head = self.tail = newNode
        else:
            self.tail.next =newNode
            self.tail =newNode
        self.size += 1
    def remove_first(self):
       second = self.head.next
       self.head.next = None
       self.head =second
       self.size -= 1
    def remove_last(self):
        if self.isEmpty():
            print('Linked List is empty')
            return
        if self.head == self.tail:
            self.head = self.tail = None
            self.size -= 1
            return
        current = self.head
        while current != None:
            if current.next == self.tail:
                break
            current = current.next
        self.tail = current
        current.next = None
        self.size -= 1
    def reverse(self):
        prev=None
        curr = self.head
        print('CURRENT => ',curr.next.value)
        while curr != None:
            temp = curr.next
            curr.next = prev
            prev =curr
            curr=temp
        self.head = prev
    def isEmpty(self):
        return self.head is None
    def length(self):
        return str(self.size)
    def print(self):
        if self.head is None:
            print('Linked List is empty')
        itr = self.head
        llstr = ''
        while itr:
            llstr += str( itr.value) + '--->'
            itr = itr.next
        print(llstr)
my_ll = MyLinkedList()
my_ll.addFirst(1)
my_ll.addFirst(2)
my_ll.addFirst(3)
# my_ll.addLast(10)
# my_ll.remove_first()
# my_ll.remove_last()
# my_ll.remove_last()
# my_ll.remove_last()
my_ll.reverse()

print('Sizes',my_ll.length())
my_ll.print()
