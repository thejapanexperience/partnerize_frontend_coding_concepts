// https://www.w3schools.com/js/js_scope.asp

// global scope
name = 'Elia'
console.log(name)

test = () => {
    const name1 = 'Richard'
    name2 = 'Mariko'
    console.log(name1, name2)
}

test()

// name2 is now a thing on the global scope but name1 will throw an error as it is not defined
console.log(name2)
