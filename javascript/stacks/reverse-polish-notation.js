function infixToPostfix(expression) {
  const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  let stack = [];
  let postfix = [];

  for (let char of expression) {
    if (char.match(/[a-zA-Z0-9]/)) {
      // Operand
      postfix.push(char);
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        postfix.push(stack.pop());
      }
      stack.pop(); // Remove '('
    } else {
      // Operator
      while (
        stack.length > 0 &&
        stack[stack.length - 1] !== "(" &&
        precedence[stack[stack.length - 1]] >= precedence[char]
      ) {
        postfix.push(stack.pop());
      }
      stack.push(char);
    }
  }

  while (stack.length > 0) {
    postfix.push(stack.pop());
  }

  return postfix.join("");
}

// Example
const infix = "A+B*C-D";
const postfix = infixToPostfix(infix);
console.log(`Infix: ${infix}`);
console.log(`Postfix: ${postfix}`);
