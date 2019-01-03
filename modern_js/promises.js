// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const axios = require("axios");

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("foo");
  }, 2000);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("bojack");
  }, 1000);
});

promise2.then(name => {
  console.log(name);
});

console.log(promise2);

const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/ditto/");

promise3.then(pokemon => {
  console.log(pokemon.data.forms);
});

console.log(promise3);
