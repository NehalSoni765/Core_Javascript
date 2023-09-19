const password = "abc123passwordASD";
console.log(password.includes('password'));

//trim - remove extra spaces
let name = " Andrew Mad "
console.log(name.trim());

const number = 103.415
console.log(Math.round(number));//103.41->103
console.log(Math.floor(number));//103.41->103(down)
console.log(Math.ceil(number));//103.41->104?(up)
//random default 0-0.999
const min=10;
const max=20;
const random=Math.floor(Math.random()*(max-min+1))+min//0to11 means not include 11
console.log("random "+random);