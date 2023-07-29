"use strict"
// typeof operators
/*
string "harshit"
number 2, 2.5, 1.3
booleans
undefined
null
BigInt
Symbol
*/

let firstName="Harshit";
let age=23;

// check datatype
console.log(typeof firstName);
// console.log(typeof(firstName));
// console.log(typeof(23));


// convert number to string
age=age+"";
console.log(typeof age) //22 => "22"

// convert string to number
// let myString= +"12";
let myString= 654;
myString=String(myString)
console.log(typeof(myString));
console.log(myString);

// String concatenation
let String1="Narendra";
let String2="Lodhi";
let fullName=String1 + " " + String2;
console.log(fullName);

String1="654";
String2="658";
fullName=String1 + " " + String2;
console.log(fullName);


/* undefined
    pass the variable or not fill value in variable
    var x; (valid)
    let x; (valid)
    const x; (invalid)
*/
let j;
console.log(typeof(j));
j="Jitendra";
console.log(typeof(j));
console.log(typeof(undefined));


//null
//Define null in variable
let k=null;
console.log(k);
//asign value in variable & check
k="kartik";
console.log(typeof(k),"=>",k);
console.log(typeof(null));
/*
output=>object not null
bug, error in js
*/


/* BigInt
premative datatype
use for max number
takeoff 2020
console.log(Number.MAX_SAFE_INTEGER);
*/
let myNumber=BigInt(5465461321356489793213213679);
let sameNumber=123n;
let i= 12;
console.log(myNumber,"=>",typeof(myNumber));
console.log(sameNumber,"=>",typeof(sameNumber));
console.log(myNumber,"=>",typeof(myNumber), sameNumber,"=>",typeof(sameNumber));//valid(no_error[both BigInt Datatypes])
// console.log(myNumber+ i);//invalid(error[BigInt Datatype not working with other datatypes])



/*
Booleans & comparison operator
True, False
*/
let num1=8;
let num2=6;
console.log(num1>num2);

/*
comparison operator
== VS ===
!= VS !==
*/

//==
// let num3=6;
let num3='6';
let num4=6;
console.log(num3==num4);//true

// ===
num3='6';
num4=6;
console.log(num3===num4);//false

//!=
let num5=10;
let num6=20;
console.log(num5!=num6);//true

//!==
num5=10;
num6=10;
console.log(num5!==num6);//false

//truthy & falsy values
//truthy
let name1="Harshit";
if(name1){
    console.log(name1);
}else{
    console.log("Variable is empty");
}

/*falsy values
false
"" empty
null
undefined
*/
//Falsy
name1="";
if(name1){
    console.log(name1);
}else{
    console.log("Variable is empty");
}

//Falsy
name1=undefined;
if(name1){
    console.log(name1);
}else{
    console.log("Variable is empty");
}

//Falsy
name1=false;
if(name1){
    console.log(name1);
}else{
    console.log("Variable is empty");
}

//Falsy
name1=null;
if(name1){
    console.log(name1);
}else{
    console.log("Variable is empty");
}