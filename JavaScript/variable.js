"use strict"; // strictly follow programming rules

// Intro to variables

/*Rules:- 
    
    # start with alphabetically    
        1value (invalid)
        value1 (valid)

    # you can use only underscore _ or dollar symbol not special characters[! @ # % ^ & *]
        value_ (valid)
        _value (valid)
        value$ (valid)
        $value (valid)

    #blank space not allowed in variable name
        first value (invalid)
        first_value (valid) 
        firstValue (valid ['camel case writing'])

    
*/


// variables can store some information
// we can use that information later
// we can change that information later   


/*
Type of variables
{ 
    var [multi time declare & change value], 
    let [not multi time declare & change value],
    const [not multi time declare & not change value] }

*/
// declare a variable 
// firstName="Narendra"; [not error]
// Use { LET }
var firstName="Narendra";

// use a variable
console.log(firstName);

//change value
firstName="Harshit";
console.log(firstName);


// Use { LET }
let secName="Narendra";

// use a variable
console.log(secName);

//change value
// let secName="Harshit"; [Errored because use "let"]
secName="Harshit";
console.log(secName);


//declare constants
const pi=3.14;
console.log(pi);

// not change that's variable
// pi=3.15;
// console.log(pi)
