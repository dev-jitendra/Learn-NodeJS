/*
Objects inside array
very useful in real world applications
*/
const users=[
    {userID:1,firstName:"Narendra",gender:"male"},
    {userID:2,firstName:"Mohit",gender:"male"},
    {userID:3,firstName:"Sheetal",gender:"female"},
];
// console.log(users);
for(let user of users){
    console.log(user['firstName']);
}