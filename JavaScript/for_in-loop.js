// for in loop for array

const fruits=[`apple`,`mango`,`orange`,`grapes`];
const fruit=[];
//index print
for(let index in fruits){
    fruit.push(fruits[index].toUpperCase());
}
console.log(fruit);