// Useful String Methods
/*
    trim() //Remove space

    toUpperCase() // Convert string to Upper case

    toLowerCase() // Convert string to Lower case

    Slice //
*/
let firstName=" Harshit  ";
console.log(firstName.length);


/* trim() Method
    return new string because string is always inmutable
    firstName=firstName.trim();
*/
let x=firstName.trim();
console.log(x.length);

// toUpperCase() Method
let a="manoj";
a=a.toUpperCase();
console.log(a);

// toLowerCase() Method
let b="ThakurManojSinghLodhi";
b=b.toLowerCase();
console.log(b);

// slice() Method
let newString=firstName.slice(0,8);
// let newString=firstName.slice(0,firstName.length);
console.log(newString);