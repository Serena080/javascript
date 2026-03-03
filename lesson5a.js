// Arrow functions in javascript
// This is a function that was was introduced in the ECMA script 6 and gave us the latest / modern way of defining function s in a compact manner


// At times the arrow functions can be said to ba anonymous functions; This is because they use the names of the variables they are contained in



const sayHello = () => {
     console.log ("This is an arrow function")
}

sayHello();



console.log("++++++++++++++++++++++++++++++++")
// Create an arrow function that is able to find the product of three numbers

// const numbers = () => x * y * z {
      
//      console.log("The product of the numbers is:")
// }
// numbers();


const product1 = (a, b, c) => {
    return a * b * c;
}
console.log(product1(2, 3, 4));


const product = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
product();

