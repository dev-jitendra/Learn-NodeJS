// if else condition
let age=17;
if(age>=18){
    console.log(age>=18);
    console.log("User can play DDlc");
}else{
    console.log(age>=18);
    console.log("User can't play DDlc");
}

let num=14;
if(num%2==0){
    console.log(num%2==0);
    console.log("Number is Even");
}else{
    console.log(num%2==0);
    console.log("Number is Odd");
}

// nested if else
let win_num=19;
let input=+prompt("Guess a Number");
// console.log(typeof(input),input);
if(input===19){
    console.log("Your guess is write");
}
else{
    if(input<win_num){
        console.log("To low !!!");
    }
    else{
        console.log("To High !!!");
    }
}


/*
if
else if
else if
else 
*/
let tepInDegree=15;
if(tepInDegree<0){
    console.log("Extremely cold outside");
}
else if(tepInDegree<16){
    console.log("It is cold Outside");
}
else if(tepInDegree<25){
    console.log("Eheather is okay");
}
else if(tepInDegree<35){
    console.log("Lets go for swim");
}
else if(tepInDegree<45){
    console.log("Turn on AC");
}
else{
    console.log("To Hot !!!");
}
console.log("Hy");