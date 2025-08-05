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

  // isBalanced(input) {
  //   const stack = new Stack();

  //   for (let ch of input) {
  //     if (this.isLeftBracket(ch)) {
  //       stack.push(ch);
  //     } else if (this.isClosedBracket(ch)) {
  //       if (stack.empty()) return false;

  //       const top = stack.pop(); // Correct: no argument
  //       if (!this.bracketsMatch(top, ch)) {
  //         return false;
  //       }
  //     }
  //   }

  //   return stack.empty(); // Must be empty for it to be balanced
  // }
  isBalanced(input) {
    const stack = new Stack();

    for (let i = 0; i < input.length; i++) {
      const ch = input[i];

      if (this.isLeftBracket(ch)) {
        stack.push({ char: ch, index: i });
      } else if (this.isClosedBracket(ch)) {
        if (stack.empty()) {
          return {
            balanced: false,
            error: `Extra closing '${ch}' at index ${i}`,
          };
        }

        const top = stack.pop();
        if (!this.bracketsMatch(top.char, ch)) {
          return {
            balanced: false,
            error: `Mismatch at index ${i}: expected closing for '${top.char}' at index ${top.index}, but found '${ch}'`,
          };
        }
      }
    }

    if (!stack.empty()) {
      const unmatched = stack.pop();
      return {
        balanced: false,
        error: `Unclosed opening '${unmatched.char}' at index ${unmatched.index}`,
      };
    }

    return { balanced: true };
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

// const expression = new Expression();

// console.log(expression.isBalanced("([)]"));
// console.log(expression.isBalanced("{[()]}"));
module.exports = Expression;
