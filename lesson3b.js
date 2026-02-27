// The while loop
// Below is the syntax of the while loop

// 1.The initialization of the variable
// 2.The while keyword 
// 3. The condition to be checked 
// 4. The body of the while loop


i = 0
while (i < 11){
     console.log("The number is",i);i++;
}

console.log("====================================================")

// The map() function
const rawdata = [10,20,30];
const doubled = rawdata.map(num=>num*2)
console.log(doubled)

// Research on this
const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]


// Research on this 
// it creates a new array
let number =[1,2,3,4,5];
let squares =number.map(num => num**2);
console.log(squares)


// Task: Write a for loop to print all odd numbers from 1 to 19.


// Task: Write a for loop to count down from 10 to 1 and print the numbers in the
// console.


