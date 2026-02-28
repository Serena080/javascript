// Create a for loop that is able to check/printout all the leap year from 2000 to 2026


for (let year = 2000 ; year<= 2026 ; year++)
     
     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
     console.log("The leap year is:", year)
}







// Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. 
 numbers = [10, 20, 4, 45, 99, 1];

let largest = numbers[0];  // assume the first number is the largest

for (let integer = 1; integer < numbers.length; integer++) {
    if (numbers[integer] > largest) {
        largest = numbers[integer];
    }
}

console.log("Largest number is:", largest);


// Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.


for (let number = 1; number <= 10; number++) {
    console.log("5 x " + number + " = " + (5 * number));
}