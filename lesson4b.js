// Anonymous functions in javascript
// These are functions that exist without a name

// Below is an example, it shall take the name of  the variable in which they are contained:

const greet= function(){

     console.log("Hello there, I hope your Monday is fine...")
}

console.log(typeof(greet))
greet();


// Below is another anonymous function

(function(){
     console.log("Welcome to the world of programming...")
})();