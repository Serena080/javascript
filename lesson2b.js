// Comparison operators

// The y usually evaluate to a boolean answer

let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 <= number2)
console.log(number2 >= number1)
console.log(number2 > number1)
console.log(number1 > number2)
console.log(number1 != number2)


console.log("=======================================================")
// Logical operators
// Are used to evaluate two or more conditions and they also give a boolean answer


// The logical AND (&&)
// Evaluates to true if and only if all of the conditions/ statements are true
console.log((number1 < number2) && (number2 > number1))


// The logical OR (|)
// It evaluates to true if one of the conditions is true
console.log((number1 > number2) || (number3 > number1))


// The logical NOT (!)- It  used to negate a conditions
console.log(!(number3 > number1))
