my_hash_set = [None,'Jones',None,'Lisa',None,'Bob',None,'Siri','Pete',None]

def hash_function(value):
    sum_of_chars = 0
    for char in value:
        sum_of_chars += ord(char)
    
    return sum_of_chars % 10

def contains(name):
    index = hash_function(name)
    return my_hash_set[index]== name
print("'Pete' is in the Hash Set:",contains('Pete'))

hash_map = {"a": 1, "b": 2}
hash_map["c"] = 3
hash_map.update({"d":4})
print("Hash Map: ", hash_map.items())

dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4, "a": 5}

new_dict = {**dict1, **dict2}
print(new_dict)

def nonerepated(str):
    char_count = {}
    for i in len(range(str)):
        char = str[i]
        char_count[char] = (char_count[char] or 0) +1
    for i in len(range(str)):
        char = str[i]
        if char_count[char] == 1:
            return char
            
    return ""


print(unueque_char('a green apple'))

