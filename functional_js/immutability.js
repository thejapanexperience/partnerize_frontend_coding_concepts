// https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/

// Mutating an object
const person = {
  name: "John",
  age: 28
};
const newPerson = person;
newPerson.age = 30;
console.log(newPerson === person); // true
console.log(person); // { name: 'John', age: 30 }
console.log(newPerson); // { name: 'John', age: 30 }

// Immutable Object.assign()
const person2 = {
  name: "John",
  age: 28
};
const newPerson2 = Object.assign({}, person2, {
  age: 30
});
console.log(newPerson2 === person2); // false
console.log(person2); // { name: 'John', age: 28 }
console.log(newPerson2); // { name: 'John', age: 30 }

// Immutable object spread operator
const person3 = {
  name: "John",
  age: 28
};
const newPerson3 = {
  ...person3,
  age: 30
};
console.log(newPerson3 === person3); // false
console.log(person3); // { name: 'John', age: 30 }
console.log(newPerson3); // { name: 'John', age: 30 }

// Immutable object spread operator with a DELETION
const person4 = {
  name: "John",
  password: "123",
  age: 28
};
const property = "password";
const newPerson4 = Object.keys(person4).reduce((obj, key) => {
  if (key !== property) {
    return { ...obj, [key]: person4[key] };
  }
  return obj;
}, {});
console.log(newPerson4 === person4); // false
console.log(person4); // { name: 'John', age: 30 }
console.log(newPerson4); // { name: 'John', age: 30 }

// Immutable adding to an array
const characters = ["Obi-Wan", "Vader"];
const newCharacters = [...characters, "Luke"];
console.log(characters === newCharacters); // false
console.log(characters); // [ 'Obi-Wan', 'Vader' ]
console.log(newCharacters); // [ 'Obi-Wan', 'Vader', 'Luke' ]

const characters2 = ["Obi-Wan", "Vader", "Luke"];
// Removing Vader
const withoutVader = characters2.filter(char => char !== "Vader");
console.log(withoutVader); // [ 'Obi-Wan', 'Luke' ]
// Changing Vader to Anakin
const backInTime = characters2.map(char =>
  char === "Vader" ? "Anakin" : char
);
console.log(backInTime); // [ 'Obi-Wan', 'Anakin', 'Luke' ]
// All characters uppercase
const shoutOut = characters2.map(char => char.toUpperCase());
console.log(shoutOut); // [ 'OBI-WAN', 'VADER', 'LUKE' ]
// Merging two character sets
const otherCharacters = ["Yoda", "Finn"];
const moreCharacters = [...characters2, ...otherCharacters];
console.log(moreCharacters); // [ 'Obi-Wan', 'Vader', 'Luke', 'Yoda', 'Finn' ]

// Sort mutates!
const characters3 = ["Obi-Wan", "Vader", "Luke"];
const sortedCharacters3 = characters3.sort();
console.log(sortedCharacters3 === characters3); // true :-(
console.log(characters3); // [ 'Luke', 'Obi-Wan', 'Vader' ]

// Sort without mutating by combining with slice / concat / ...
const characters4 = ["Obi-Wan", "Vader", "Luke"];
const sortedCharactersSlice = characters4.slice().sort();
console.log(sortedCharactersSlice === characters4); // false :-D
console.log(sortedCharactersSlice); // [ 'Luke', 'Obi-Wan', 'Vader' ]
console.log(characters4); // [ 'Obi-Wan', 'Vader', 'Luke' ]
const sortedCharactersConcat = characters4.concat().sort();
console.log(sortedCharactersConcat === characters4); // false :-D
console.log(sortedCharactersConcat); // [ 'Luke', 'Obi-Wan', 'Vader' ]
console.log(characters4); // [ 'Obi-Wan', 'Vader', 'Luke' ]
const sortedCharactersSpread = [...characters4].sort();
console.log(sortedCharactersSpread === characters4); // false :-D
console.log(sortedCharactersSpread); // [ 'Luke', 'Obi-Wan', 'Vader' ]
console.log(characters4); // [ 'Obi-Wan', 'Vader', 'Luke' ]
