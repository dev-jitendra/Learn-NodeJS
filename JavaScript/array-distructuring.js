// array distructuring

const myArray=[`item1`,`item2`,`item3`];
let ar1=myArray[0];
let ar2=myArray[1];
console.log(`my ar1 ${ar1} \nmy ar2 ${ar2}`);

// shortcut
const [myVar2,myVar1,...my2ar]=myArray;
console.log(`my ar1 ${myVar1} \nmy ar2 ${myVar2}`);
console.log(my2ar);
