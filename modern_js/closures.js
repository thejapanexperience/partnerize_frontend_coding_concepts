// www.w3schools.com/js/js_function_closures.asp

var add = (function() {
  var counter = 0;
  return function() {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

add();
add();
add();

// the counter is now 3

const add2 = (() => {
  let counter = 0;

  const iterate = () => {
    counter += 1;
    console.log(counter);
    return counter;
  };

  return () => iterate();
})();

add2();
add2();
add2();
