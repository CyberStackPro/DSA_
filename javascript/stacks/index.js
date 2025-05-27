const readline = require("readline");
const Expression = require("./expression");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const expr = new Expression();

console.log("🧠 Balanced Brackets Checker");
console.log("Type an expression like (a+b), {x[2]}, ([)], etc.");
console.log("Type 'exit' to quit.\n");

function ask() {
  rl.question("Enter expression: ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("👋 Bye!");
      rl.close();
      return;
    }

    const result = expr.isBalanced(input) ? "✅ Balanced" : "❌ Not Balanced";

    console.log(result + "\n");
    ask(); // ask again
  });
}

ask();
