// Exporting modules
// we export modules so that we can use them in other files/modules in the program

export const calculator = (x,y) =>{
     let difference = x - y

     console.log("the difference of the two numbers is:", difference)

}


export const simpleInterest = (principle,rate,time) => {
     let si = (principle * rate * time )/100

     console.log("The simple interest of the amount is:", si)
}

