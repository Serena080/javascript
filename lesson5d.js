// Import the module that was declared on the previous lesson

import { calculator , simpleInterest} from "./lesson5c.js";

calculator(50,10)
simpleInterest(25000,8,9)


// Write a function that prints the number from 1 to 50.But for multiples of 3,print "fizz" instead of the number,and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5 , print "FizzBuzz"

for (let number = 1 ;number<=50 ; number++){

     if (number % 5=== 0 && number % 3 === 0){
          console.log("FizzBuzz")
     }

     else if  (number % 3 === 0) {

     console.log("Fizz")}

     else if (number % 5 === 0){
          console.log("Buzz")
     }

      
     

     else{
          console.log(number)
     }

}