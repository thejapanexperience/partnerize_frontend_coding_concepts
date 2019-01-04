// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

function* generatorFunction() {
  console.log("This will be executed first.");
  yield "Hello, ";
  console.log("I will be printed after the pause");
  yield "World!";
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
// This will be executed first.
// Hello,
// I will be printed after the pause
// World!
// undefined

function* countingGenerator() {
  let num = 0;
  console.log("I am about to start counting");
  yield `${num}`;
  num += 1;
  yield `${num}`;
  num += 1;
  yield `${num}`;
}

const countingGeneratorObject = countingGenerator();

console.log(countingGeneratorObject.next().value);
console.log(countingGeneratorObject.next().value);
console.log(countingGeneratorObject.next().value);
