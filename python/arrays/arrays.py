# append  Add to the end
# insert  Insert at a specific index (index 1)
# remove Remove by value (first occurrence)
# pop  Remove and return the last element (or element at a given index if index is provided)
# len() function to get length
numbers = [1,2,3,4,5]
# squared_num = [num**2 for num in numbers]  Square each number
# even_num = [num for num in numbers if num %2 == 0] Filter for even numbers
#
class CustomArray:
    def __init__(self,capacity) -> None:
        self.length = 0          # Current number of elements
        self.capacity = capacity         # Current maximum capacity
        self.data = [None] * self.capacity  # Initialize storage
    def append(self, item) -> None:
        # If we're out of space, resize
        if self.length == self.capacity:
            self._resize(2 * self.capacity)

        # Add the item and increment length
        self.data[self.length] = item
        self.length += 1
    def insert(self,index, item):
        if self.length == self.capacity:
            raise Exception('Array capacity reached')
        if not 0 <= index <= self.length:
            raise IndexError('Index out of bonds ')

        for i in range(self.length, index, -1):
            self.data[i]=self.data[i-1]
        self.data[index] = item
        self.length += 1
    def remove(self,item):
        for i in range(self.length):
            if self.data[i] == item:
                for j in range(i,self.length - 1):
                    self.data[j] = self.data[j+1]
                self.data[self.length - 1] = None
                self.length -= 1
                return
        raise ValueError(f"{item} not found in the array")

    def _resize(self, new_capacity: int) -> None:
        """Private method to resize the underlying storage"""
        new_data = [None] * new_capacity

        # Copy existing data
        for i in range(self.length):
            new_data[i] = self.data[i]

        self.data = new_data
        self.capacity = new_capacity

    def __getitem__(self, index: int):
        """Implement indexing (e.g., arr[0])"""
        if not 0 <= index < self.length:
            raise IndexError("Index out of bounds")
        return self.data[index]

    def __setitem__(self, index: int, value) -> None:
        """Implement assignment to indices (e.g., arr[0] = 5)"""
        if not 0 <= index < self.length:
            raise IndexError("Index out of bounds")
        self.data[index] = value

    def __len__(self) -> int:
        """Implement len() support"""
        return self.length

    def __str__(self) -> str:
        """Implement string representation"""
        return str(self.data[:self.length])

    def pop(self):
        """Remove and return the last item"""
        if self.length == 0:
            raise IndexError("Cannot pop from empty array")

        self.length -= 1
        item = self.data[self.length]
        self.data[self.length] = None  # Optional: clean up reference

        # Optional: shrink if we're using less than 25% of capacity
        if self.length < self.capacity // 4:
            self._resize(self.capacity // 2)

        return item
        # if self.length == 0:
        #           raise IndexError("Cannot pop from an empty array")
        #       last_element = self.data[self.length - 1]
        #       self.data[self.length - 1] = None  # Optional: Clear the slot
        #       self.length -= 1
        #       return last_element

arr = CustomArray(4)
arr.append(10)
arr.append(20)
arr.append(30)
arr.append(40)

print(arr)          # [10, 20, 30]
print(len(arr))     # 3
print(arr[1])       # 20

arr[1] = 99
print(arr[1])       # 99

print(arr.pop())    # 30
# arr.remove(40)
print(arr)          # [10, 99]


class MyClass:
    class_attribute = 'Hello world'

    def __init__(self,name,age):
        self.name =name
        self.age=age
    def greet(self):
        return f"Hi, my name is {self.name} and i'm {self.age} years old"

obj1 = MyClass('Alice', 30)
obj2 = MyClass('Yeabsra',20)

# print(obj1.name)
# print(obj2.age)
# print(MyClass.class_attribute)
