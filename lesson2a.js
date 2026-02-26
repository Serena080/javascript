// Object data types-
// An object in javascript is a datatype that stores data in form of key value pairs.

let person = {
     Name : "Serena Enane",
     Age : 26,
     isRegistered : true 

};

console.log("The details of the person is: ", person)



// First method is by use of the square brackets
console.log(person["Age"])

// The second method is by dot(.) notation
console.log(person.Name)

// Check the data types
console.log(typeof(person))





// Array Data Type
// This refers to a collection of items that are on indexes

let fruits = ["Apple" , "Pineapple" , "Lemon" , "Banana" , "Mango" , "Grapes" , "Melon"]

console.log("The entire array of frutis is:",fruits)

// To access the items of an array we use the index
console.log(fruits[4])


// You can slice the items of the array
console.log(fruits.slice(2, 4))

