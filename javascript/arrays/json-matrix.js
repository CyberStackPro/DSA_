function jsonToMatrix(arr) {
  let matrix = [];
  for (let obj of arr) {
    for (let key in obj) matrix.push([obj[key], key] ?? null);
  }
  return matrix;
}
function jsonToMatrixObj(arr = []) {
  let matrix = [];
  arr.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      matrix.push([obj[key], key]);
    });
  });
  return matrix;
}

let arr = [
  { b: 1, a: 2 },
  { b: 3, a: 4 },
];
console.log(jsonToMatrixObj(arr));

function findMissingNumber(arr) {
  if (arr.length === 0) return 1;
  if (!arr) return undefined;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12])); // 5
console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])); // 9
console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9])); // 7
