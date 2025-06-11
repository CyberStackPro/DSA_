 ### The Goal of this Mini-Project

# We will build a simple program that does the following:
# 1.  Creates a digital representation of a store shelf using a NumPy array.
# 2.  Places a "product" (like a bottle) onto this shelf.
# 3.  Simulates a "hand" moving towards the product.
# 4.  Detects the exact moment the hand "touches" the product and prints an alert.
 
import numpy as np

# Create a 10x20 grid (10 rows high, 20 columns wide) to be our camera view
# np.zeros creates an array filled with 0s.
# We use 'int' as the data type to keep it simple.
camera_view = np.zeros((10,20), dtype=int)

# print("Our empty store shelf view:")
# print(camera_view)

# Let's define the product's position.
# We'll say it takes up rows 5 through 8, and columns 7 through 10.
# The format is array[row_start:row_end, col_start:col_end]

product_y_start, product_y_end=5,9 # Rows 5, 6, 7, 8
product_x_start, product_x_end=7,11  # Columns 7, 8, 9, 10


# Change all the 0s in that slice to 1s
camera_view[product_y_start:product_y_end, product_x_start:product_x_end] = 1

# This list represents the path of the hand.
# It starts at the top-right and moves towards the product.
# Each tuple is a (y, x) coordinate.
# print("Shelf view with a product (represented by 1s):")
# print(camera_view)

hand_path = [
    (2, 15), # Hand appears at the top right
    (3, 14),
    (4, 13),
    (5, 12),
    (6, 11),
    (7, 10), # <-- This is the point where the hand should touch the product!
    (8, 9)
]
# print("\nSimulated path of the hand:", hand_path)

print("\n--- Running Interaction Detection ---")

# . DETECT INTERACTION
for hand_y, hand_x in hand_path:
    print(f"Hand is at coordinate: ({hand_y}, {hand_x})")

    # The core logic: Check the value at the hand's coordinate
    if camera_view[hand_y, hand_x] == 1:
        print("!!! ALERT: Hand has touched the product! Possible grab detected.")
    else:
        print("...Hand is moving through empty space.")

    # Mark the hand's path on the view with a 9
    camera_view[hand_y, hand_x] = 9

print("\n--- Final View After Interaction ---")
print("9s show the hand's path. 1s are the product.")
print(camera_view)