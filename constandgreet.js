let greet = (name) => {

     console.log("Hello" +  name + "How have you been?I trust that you are good.")
}

greet("George");
greet("Hannah");


// AND

const greet1 = (name) => {

     console.log("Hello" +  name + "How have you been?I trust that you are good.")
}

greet("George");
greet("Hannah");


// Both versions:

// ✔ Work exactly the same
// ✔ Print the same output
// ✔ Accept parameters the same way

// The difference is in how the variable greet can be reassigned later.


// With let, you can later reassign the variable:




greet3 = (name) => {
    console.log("Hi " + name);
};


// With const, you cannot reassign the variable: