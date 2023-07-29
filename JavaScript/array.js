/*
Intro to arrays
reference data type

how to create
*/
let fruite=["mango","apple","orange","grapes"]; //odered collection of elements or items
console.log(fruite[2]);
//defferent types values store in arrays
let nums=[1,2,3,true,"string",null,undefined,false,12];
console.log(nums);
//change array value
fruite[2]="Banana"; // array is mutable
console.log(fruite);
console.log(typeof(fruite)); // array is object in javascript
console.log(Array.isArray(fruite));// check this is array or not


// Array Indexing



/*
Array Methods
    push();
    pop();
    unshift();
    shift()
*/
// push():- add item/items in ending of array
fruite.push("Orange");
console.log(fruite);

//pop():- remove a last item in array
fruite.pop();
console.log(fruite);
console.log(fruite.pop()); // pop function remove array item return

// unshift():- add item/items in starting of array
fruite.unshift("grapes","Orange");
console.log(fruite);

//shift():- remove item in starting of array
console.log(fruite.shift()); // pop function remove array item return
fruite.shift();
console.log(fruite);


/*
How to clone array

let array=["item1","item2","item3"];
let array2=array;
console.log(array===array2); //Both array is same or not
*/
// method 01
let array=["item1","item2","item3"];
let array2=array.slice(0);
console.log(array===array2);

// method 02
// new way 
// spread operator "..."
let array3=[...array];
console.log(array3);
console.log(array===array3);

// method 03
let array4=[].concat(array);
console.log(array4);
console.log(array===array4);


// how to concatenate two arrays

// let array5=array.slice(0).concat(["item4","item5","item6","item7"]); //with slice() function

// let array5=[].concat(array,["item4","item5","item6","item7"]); //with concat function

let array5=[...array,"item4","item5","item6","item7"];
console.log(array5);