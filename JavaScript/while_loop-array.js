// while loop in array
const fruits=["apple","mango","Orange","banana"];
const fruit=[];
let i=0;
while(i<fruits.length){
    fruit.push(fruits[i].toUpperCase());
    console.log(fruit[i]);
    i++;
}