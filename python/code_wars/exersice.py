def spin_words(sentence):
    # Your code goes here
    words=sentence.split()
    result = []

    for word in  words:
        if len(word) > 5:
            result.append(word[::-1])
        else:
            result.append(word)
    return ' '.join(result)
    # return None
print(spin_words("Hey fellow warriors"))

def is_narcissistic(num){
   
    power = len(str(num))

    total = sum(int(digit) ** power for digit in str(num))
    return total == num
}