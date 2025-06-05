import numpy as np


# A simple Python list
my_list = [1,2,3,4,5]

# Convert the list to a NumPy array
my_numpy_array = np.array(my_list)

# print("This is a standard Python list:", my_list)
# print("This is a NumPy array:", my_numpy_array)

# You can also create a 2D array (like a grid or a simple image)
my_2d_list = [[1, 2, 3], [4, 5, 6]]
my_2d_array = np.array(my_2d_list)

# print("\nThis is a 2D NumPy array (a grid):\n", my_2d_array)


box_coordinates = [210, 150, 450, 400]
bounding_box = np.array(box_coordinates)

# print("Bounding Box as a NumPy array:", bounding_box)

my_2d_array = np.array([[1, 2, 3], [4, 5, 6]])

# .shape tells you the dimensions (rows, columns)
# print("Shape of the array:", my_2d_array.shape)

# .dtype tells you the data type of the elements
# print("Data type of the array:", my_2d_array.dtype)

mock_image_frame= np.array([
    [[0,0,0], [0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0], [0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0], [0,0,0],[0,0,0],[0,0,0]],
    [[0,0,0], [0,0,0],[0,0,0],[0,0,0]],
])
# print("Shape of our mock image:", mock_image_frame.shape)
# print("Data type of our mock image:", mock_image_frame.dtype)
my_array = np.array([10,20,30,40,50]);

# Add 5 to every element
added_array = my_array + 5
# print("Array after adding 5:", added_array)

# Multiply every element by 2
multiplied_array = my_array * 2
# print("Array after multiplying by 2:", multiplied_array)

# You can also do operations between two arrays
array_b = np.array([2, 2, 2, 2, 2])
final_array = my_array * array_b
# print("Array multiplied by another array:", final_array)

pixel_values = np.array([0, 64, 128, 192, 255])

# Normalize the values
normalized_pixels = pixel_values / 255.0

# print("Original pixel values:", pixel_values)
# print("Normalized pixel values:", normalized_pixels)

# Notice the dtype will now be 'float64' because of the division
# print("New data type:", normalized_pixels.dtype)

grid = np.array([
    [10, 11, 12, 13],
    [20, 21, 22, 23],
    [30, 31, 32, 33],
    [40, 41, 42, 43]
])

# Get a single element (row 1, column 2 which is 22)
element = grid[1, 2]
# print("Single element [1, 2]:", element) # --> direction

# Get an entire row (row 0)
first_row = grid[0, :] # The ':' means "all columns"
# print("First row:", first_row)

# Get an entire column (column 3)
last_column = grid[:, 3] # The ':' means "all rows"
# print("Last column:", last_column)

# Slice a sub-region (a 2x2 box from the top left)
# It means: give me rows 0 up to (but not including) 2
# AND columns 0 up to (but not including) 2.
top_left_box = grid[0:2, 0:2]
# print("\nTop-left 2x2 box:\n", top_left_box)

# You have a `6x6` video frame (a NumPy array). The model has detected an item of interest. The item is in a box whose top-left corner is at `(row=2, column=2)` and bottom-right corner is at `(row=4, column=4)`.

# **Your Task:** Write the NumPy slicing code to "crop" out this item from the main frame.

# 12x12 Grid (row x col):

#      0  1  2 [3  4  5  6  7] 8  9 10 11
#  0   .  .  .  .  .  .  .  .  .  .  .  .
#  1   .  .  .  .  .  .  .  .  .  .  .  .
#  2   .  .  .  .  .  .  .  .  .  .  .  .
# [3]  .  .  .  X  X  X  X  X  .  .  .  .
# [4]  .  .  .  X  X  X  X  X  .  .  .  .
# [5]  .  .  .  X  X  X  X  X  .  .  .  .
# [6]  .  .  .  X  X  X  X  X  .  .  .  .
# [7]  .  .  .  X  X  X  X  X  .  .  .  .
#  8   .  .  .  .  .  .  .  .  .  .  .  .
#  9   .  .  .  .  .  .  .  .  .  .  .  .
# 10   .  .  .  .  .  .  .  .  .  .  .  .
# 11   .  .  .  .  .  .  .  .  .  .  .  .

frame = np.arange(144).reshape(12, 12)
print("Original Frame:\n", frame)
# 
# The item is from row 3 up to (but not including) row 8,
# and from column 3 up to (but not including) column 8.
# NOTE: To include row/column 7, the slice must go to 8.
y_start, y_end = 3, 8
x_start, x_end = 3, 8

cropped_item = frame[y_start:y_end, x_start:x_end]

print("\nCropped Item:\n", cropped_item)

# cropped = frame[___:___, ___:___]
