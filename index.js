// Function that takes a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Named function
    function namedFunction() {
      console.log("I am a named function!");
    }
  
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Anonymous function
    return function() {
      console.log("I am an anonymous function!");
    };
  }
 