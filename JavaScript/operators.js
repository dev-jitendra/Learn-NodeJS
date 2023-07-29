// Ternary operator
let age = 4;
let drink;
if(age>=5){
    drink="coffee";
}
else{
    drink="Milk";
}
console.log(drink);

// Ternary operator / Conditional Operator
let umar=5;
let drinking= umar>=5 ? "Coffee" : "Milk";
console.log(drinking);



// and or operator
// and operator

let firstname="Narendra";
let ages=22;
if(firstname[0]==="N"){
    console.log("Your name starts with N");
}
if(ages>=18){
    console.log("You are above 18");
}

if(firstname[0] === "N" && ages>18){
    console.log(`Name starts with ${firstname[0]} and age above ${ages}`);  
}
else{
    console.log("Inside else");
}

// or operator

firstname="Narendra";
ages=17;
if(firstname[0] === "N" || ages>18){
    console.log(`Name starts with ${firstname[0]} and age above ${ages}`);
}
else{
    console.log("Inside else");
}



/* Booleans & Comparison Operator
* Booleans
* true, false
*/
let num1=7;
let num2=7;
console.log(num1===num2);