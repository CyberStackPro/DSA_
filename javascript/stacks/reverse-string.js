const Stack = require("./stacks");

class StringReverser {
  constructor() {
    // super();
  }
  reverse(input = "") {
    const stack = new Stack();

    for (let i = 0; i < input.length; i++) {
      stack.push(input.charAt(i));
    }
    // console.log("UUUUUU", stack);
    let reversed = "";
    while (!stack.empty()) {
      console.log("RRRRRRR", reversed);
      reversed += stack.pop();
    }
    return reversed.toString();
    // for(let ch in Array(input)){
    //   stack.push(ch)
    // }
  }
}
const str = new StringReverser();
console.log(str.reverse("abcd"));

function reverseString(str = "") {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reverseString("abcd"));

function findMissingNumber(arr) {}
let billAmount = 75.5;
let tipPercentage = 0.15; // Representing 15% as a decimal
let numPeople = 4;

let tipAmount = billAmount * tipPercentage;
let totalWithTip = tipAmount + billAmount;
let amountPerPerson = totalWithTip / numPeople;

let roundedAmount = parseFloat(amountPerPerson.toFixed(2));

console.log(`Tip amount: ${tipAmount.toFixed(2)}`);
console.log(`Total with tip: ${totalWithTip.toFixed(2)}`);
console.log(`Amount per person: ${roundedAmount.toFixed(2)}`);

let items = 58;
let boxlimit = 10;

let full_boxes = items / boxlimit;
let leftover = items % boxlimit;
console.log({ "Full Boxes": full_boxes, "Left Over": leftover });
