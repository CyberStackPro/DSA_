const Stack = require("./stacks");

class Expression {
  isBalanced(input) {
    const stack = new Stack();

    for (let ch of input) {
      console.log("CH= ", ch);

      if (ch === "(" || ch === "<" || ch === "[" || ch === "{") stack.push(ch);

      if (ch === ")" || ch === "<" || ch === "[" || ch === "{") {
        if (stack.empty()) return false;

        stack.pop();
        // let top = stack.pop(ch);
        // if (
        //   (ch === ")" && top != "(") ||
        //   (ch === ">" && top != "<") ||
        //   (ch === "]" && top != "[") ||
        //   (ch === "}" && top != "{")
        // )
        //   return false;
      }
    }
    console.log(stack);
    return stack.empty();
  }
}

const expression = new Expression();
console.log(expression.isBalanced("{1 + 2}}"));
console.log(expression);
