//premative vs reference datatypes

//premative datatypes
let num1=6;
let num2=num1;
console.log(`num1 value is ${num1}`);
console.log(`num2 value is ${num2}`);
num1+=1;
console.log(`num1 value is ${num1}\nnum2 value is ${num2}`);

// reference data tyes
// arrray
let ar1=["item1","item2"];
let ar2=ar1;
console.log(`ar1 is ${ar1}\nar2 is ${ar2}`);
console.log(`after pushing element to array 1`);
ar1.push("item3");
console.log(`ar1 is ${ar1}\nar2 is ${ar2}`);
