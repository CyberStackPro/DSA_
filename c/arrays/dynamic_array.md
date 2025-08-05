Start:
[_, _] capacity = 2

Insert 10:
[10, _] capacity = 2

Insert 20:
[10, 20] capacity = 2

Insert 30 → Resize! (capacity full)
=> double to 4
Copy old: [10, 20]
[10, 20, 30, _] capacity = 4

Insert 40:
[10, 20, 30, 40] capacity = 4

Insert 50 → Resize again!
=> double to 8
Copy old: [10, 20, 30, 40]
[10, 20, 30, 40, 50, _, _, _] capacity = 8
