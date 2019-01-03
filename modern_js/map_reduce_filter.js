const numArr = [1, 2, 3];

console.log(
  numArr.map(num => {
    return (num += 1);
  })
);

console.log(
  numArr.reduce((total, num) => {
    return total + num;
  }, 0)
);

console.log(
  numArr.filter(num => {
    return num > 1;
  })
);
