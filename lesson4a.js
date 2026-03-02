// Functions with parameter
// Parameters are values that get passed as arguements when a function is includeed
// They help us to create functions that can be reusable throughout a program

function greeting(name){
console.log("Hello sir", name, "How have you been")
}

greeting("Hilda E")
greeting("Solomon M")
greeting("Lewis C")


// Below is a function with parameters

function addition(number1,number2){
sum = number1+ number2
console.log("The sum of the numbers is:", sum)
}

addition(45,90)

console.log("===============================================")
// Calculate the area of a triangle whose base is 20cm and height is 12cm

let half = 0.5
function area(base, height){
     product = (half * base* height)

console.log("The area of the triangle is:", product)
}
area(20,12)


// Find the simple interest given the principle is 50000,rate as 5% and time as 8 years


function interest(principle,rate,time){
     amount = (principle* (rate/100) * time)

     console.log("The simple interest is: ", amount)
}

interest(50000,5,8)

