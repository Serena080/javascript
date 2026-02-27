const myData = {
     name :"Fish",
     type :"Food",
     source : "Water"
};

fetch('http://localhost:5000/data',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body: JSON.stringify(myData) // Convert JS Object to JSON string
     
});