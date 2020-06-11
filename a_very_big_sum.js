// Given an array of integers, return the total value of every integer in the array.

function aVeryBigSum(ar) {
  let result = 0;
  for (let i = 0; i < ar.length; i++) {
    result += ar[i];
  }
  return result;
}

console.log(aVeryBigSum(1, 2, 3, 4, 5));
console.log(aVeryBigSum(6, 7, 8, 9, 10));
console.log(aVeryBigSum(10, 20, 30, 40, 50));
console.log(aVeryBigSum(15, 20, 35, 40, 55));
console.log(aVeryBigSum(11, 22, 33, 44, 55));
