/*
Object reference type
Arrays are good but not sufficient
for real world data
Object store key value pairs
Objects don't have index
*/ 

//how to create objects
const person={
    name:"Narendra",
    age:23
};
console.log(person);
console.log(typeof(person));

// how to access data from objects
console.log(person.name);
console.log(person.age);

// how to add key value pair to objects
person.gender="male";
console.log(person.gender);

//Dot VS Brackets Notation
console.log(person["gender"]);
person["city"]="Bhopal";
console.log(person);


//defference between dot and bracket notation
const key="email";
const temp={
    uname:"Narendra",
    uage:23,
    "current city":"Bhopal"
};
// console.log(temp["current city"]);
temp[key]="narendra@gmail.com";
console.log(temp);

// how to iterate object

// for in loop
for(let key in temp){
    console.log(`${key} => ${temp[key]}`);
    // console.log(temp[key]);
}


//Object keys
console.log(typeof(Object.keys(temp)));
const val=Array.isArray(Object.keys(person));
console.log(val);
for (let key of Object.keys(person)){
    console.log(person[key])
}


// Computed Properties
const key1="objectkey1";
const key2="objectkey2";
const value1="myvalue1";
const value2="myvalue2";
const obj={}
obj[key1]="myvalue1";
obj[key2]="myvalue2";

console.log(obj);
