let rname="Amir";
let fname="Ahmad"
console.log(rname);
console.log(rname[3]);
console.log("Length of your name is "+rname.length);
console.log(`My Name is ${rname} and My friend name is ${fname}.`);
let rcase="  ASHIR";
console.log(`Hi I am ${rcase.toLocaleLowerCase()}`)
//Slicing of string
console.log(rcase.slice(1,4));
console.log(rcase.replace("SH","77"));
console.log(rname.concat(fname,"   ",rcase));
//Removes White spaces.
console.log(rcase.trim());
console.log(rname.startsWith("Am"));
console.log(rname.endsWith("Am"));