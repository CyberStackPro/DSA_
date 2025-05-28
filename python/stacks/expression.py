from stack import Stack

def is_balanced_parentheses(exp):
    stack = Stack(10)
    opening={'(','[','{','<'}
    closing={')',']','}','>'}
    pairs={'(':')', '[':']','{':'}','<':'>'}

    for char in exp:
        if char in opening:
            stack.push(char)
        elif char in closing:
            if not stack:
                return False
            if pairs[stack.pop()] != char:
                return False
    return stack.is_empty()

test_cases = [
    "(())",      # True
    "()[]{}", # True
    "(]",        # False
    "([)]",      # False
    "{[()]}",    # True
]
for test in test_cases:
    result = is_balanced_parentheses(test)
    print(f"'{test}' is balanced: {result}")


# Let's walk through the logic step by step to understand why we use `if (pairs[stack.pop()] !== char)` and how it works.

# ### Context

# We are checking if the parentheses in a given expression are balanced. We use a stack to keep track of the opening brackets. When we encounter a closing bracket, we need to ensure it matches the most recent opening bracket.

# ### Step-by-Step Walkthrough

# Let's take the expression `"([{}])"` as an example and walk through the logic.

# 1. **Initialize the Stack and Sets/Dictionary**:
#     ```python
#     stack = Stack(10)
#     opening = {'(', '[', '{', '<'}
#     closing = {')', ']', '}', '>'}
#     pairs = {'(': ')', '[': ']', '{': '}', '<': '>'}
#     ```

# 2. **Iterate Through the Expression**:
#     ```python
#     exp = "([{}])"
#     for char in exp:
#     ```

# 3. **Process Each Character**:

#     - **First Character: '('**
#         ```python
#         char = '('
#         if char in opening:
#             stack.push(char)
#         ```
#         - `'('` is an opening bracket, so it is pushed onto the stack.
#         - Stack: `['(']`

#     - **Second Character: '['**
#         ```python
#         char = '['
#         if char in opening:
#             stack.push(char)
#         ```
#         - `'['` is an opening bracket, so it is pushed onto the stack.
#         - Stack: `['(', '[']`

#     - **Third Character: '{'**
#         ```python
#         char = '{'
#         if char in opening:
#             stack.push(char)
#         ```
#         - `'{'` is an opening bracket, so it is pushed onto the stack.
#         - Stack: `['(', '[', '{']`

#     - **Fourth Character: '}'**
#         ```python
#         char = '}'
#         elif char in closing:
#             if stack.is_empty():
#                 return False
#             if pairs[stack.pop()] != char:
#                 return False
#         ```
#         - `'}'` is a closing bracket.
#         - Check if the stack is empty: It's not empty.
#         - Pop the top element from the stack: `'{'`
#         - Check if `pairs['{']` matches `'}'`:
#             ```python
#             pairs['{'] == '}'  # True
#             ```
#         - Since they match, continue.
#         - Stack: `['(', '[']`

#     - **Fifth Character: ']'**
#         ```python
#         char = ']'
#         elif char in closing:
#             if stack.is_empty():
#                 return False
#             if pairs[stack.pop()] != char:
#                 return False
#         ```
#         - `']'` is a closing bracket.
#         - Check if the stack is empty: It's not empty.
#         - Pop the top element from the stack: `'['`
#         - Check if `pairs['[']` matches `']'`:
#             ```python
#             pairs['['] == ']'  # True
#             ```
#         - Since they match, continue.
#         - Stack: `['(']`

#     - **Sixth Character: ')'**
#         ```python
#         char = ')'
#         elif char in closing:
#             if stack.is_empty():
#                 return False
#             if pairs[stack.pop()] != char:
#                 return False
#         ```
#         - `')'` is a closing bracket.
#         - Check if the stack is empty: It's not empty.
#         - Pop the top element from the stack: `'('`
#         - Check if `pairs['(']` matches `')'`:
#             ```python
#             pairs['('] == ')'  # True
#             ```
#         - Since they match, continue.
#         - Stack: `[]`

# 4. **Final Check**:
#     ```python
#     return stack.is_empty()
#     ```
#     - The stack is empty, so return `True`.

# ### Explanation of `if (pairs[stack.pop()] !== char)`

# - **Popping from the Stack**:
#     ```python
#     stack.pop()
#     ```
#     - This removes the top element from the stack and returns it. For example, if the stack is `['(', '[', '{']`, `stack.pop()` will remove and return `'{'`.

# - **Checking the Pair**:
#     ```python
#     pairs[stack.pop()] != char
#     ```
#     - This checks if the popped opening bracket matches the current closing bracket using the `pairs` dictionary.
#     - For example, if the popped element is `'{'` and the current character is `'}'`, then `pairs['{']` is `'}'`, which matches `'}'`.

# - **Why We Do This**:
#     - We need to ensure that each closing bracket matches the most recent opening bracket. By popping the stack, we get the most recent opening bracket and check if it matches the current closing bracket.
#     - If they don't match, it means the parentheses are not balanced, so we return `False`.

# ### Summary

# - **Stack Usage**: The stack helps us keep track of the opening brackets in the order they appear.
# - **Matching Brackets**: When we encounter a closing bracket, we pop the most recent opening bracket from the stack and check if they match.
# - **Efficiency**: This approach ensures that we efficiently check for balanced parentheses in linear time, O(n), where n is the length of the expression.

# By following this logic, we can determine if the parentheses in the expression are balanced.