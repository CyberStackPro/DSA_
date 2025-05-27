const Stack = require("./stacks");

class Expression {
  closedBr = [")", ">", "]", "}"];
  leftBr = ["(", "<", "[", "{"];
  bracketPairs = {
    ")": "(",
    ">": "<",
    "]": "[",
    "}": "{",
  };

  isBalanced(input) {
    const stack = new Stack();

    for (let ch of input) {
      if (this.isLeftBracket(ch)) {
        stack.push(ch);
      } else if (this.isClosedBracket(ch)) {
        if (stack.empty()) return false;

        const top = stack.pop(); // Correct: no argument
        if (!this.bracketsMatch(top, ch)) {
          return false;
        }
      }
    }

    return stack.empty(); // Must be empty for it to be balanced
  }

  isLeftBracket(ch) {
    return this.leftBr.includes(ch);
  }

  isClosedBracket(ch) {
    return this.closedBr.includes(ch);
  }

  bracketsMatch(opening, closing) {
    return this.bracketPairs[closing] === opening;
  }
}

const expression = new Expression();

console.log(expression.isBalanced("([)]"));
console.log(expression.isBalanced("{[()]}"));
