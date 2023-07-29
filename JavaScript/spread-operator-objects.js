// spread operator
const ar1=[1,2,3,4];
const ar2=[5,6,7,8];

const newar={...ar1, ...ar2};
console.log(newar);

// spreate operator in objects
const obj1={
    key1:"value1",
    key2:"value2"
};
const obj2={
    key3:"value3",
    key4:"value4"
};
const newobj={...obj1, ...obj2, key5:"value5"};
console.log(newobj);