// Nested Destructuring
const users=[
    {userId:1,uName:"Mahesh",gender:"Male"},
    {userId:2,uName:"Narendra",gender:"Male"},
    {userId:3,uName:"Ajay",gender:"SMale"},
    {userId:4,uName:"Raju",gender:"Male"},
    {userId:5,uName:"Veerendra",gender:"Male"},
    {userId:6,uName:"Koushal",gender:"Male"}
];
// const [user1,user2,user3,user4,user5,user6]=users;
// console.log(user1,user2,user3,user4,user5,user6);
const [,{uName,userId},{gender}]=users;
console.log(uName,userId);
console.log(gender);