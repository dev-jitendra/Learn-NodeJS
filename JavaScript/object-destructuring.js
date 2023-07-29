// Object Destructuring
const band={
    bname:"led zepplin",
    fsong:"stainray to heaven",
    year: 1960,
    afsong:"kashmir"
};
/*const bandname=band.bname;
const famousong=band.fsong;
console.log(bandname);
console.log(famousong);

#shortcut*/
// const {bname,fsong}=band;
const {bname:var1, fsong:var2}=band;
console.log(var1);
console.log(var2);

// year & afsong sepratelly another variable
let{bname,fsong,...temp}=band;
console.log(temp);
