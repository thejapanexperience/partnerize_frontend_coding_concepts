// rest operator
// puts all remaining arguments into an array. Must be last
const sumAll = (first, second, ...args) => {
  console.log(first, second);
  console.log(args);
};

sumAll(1, 2, 3);
sumAll(1, 2, 3, 4, 5, 6);
sumAll(1);

// spread operator
// spreads an array into separate values
const numArr = [1, 5, 3];
console.log(numArr);
console.log(...numArr);
console.log(Math.max(...numArr));
