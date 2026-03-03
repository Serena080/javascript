// Arrow functions with parameters
// Parameters are values that get pased as arguements

const greet = (name) => {

     console.log("Hello" +  name + "How have you been?I trust that you are good.")
}

greet( "George" );
greet("Hannah");


// Example 2
// Below is the function to find the area of a circle

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")


const circleArea = (pi,radius) => {
     
     let area = pi * radius * radius
     console.log("The area of the circle is:",+ area +"cm\u00B2")
}

circleArea(3.142,42)
circleArea(3.142,54)


// Come up with you r own arrow function with three parameters

const volumeCuboid = (length,width,height) =>{
     let volume = length * width * height
     console.log("The volume of the cuboid is:" + volume )
}

volumeCuboid(25,17,10)


