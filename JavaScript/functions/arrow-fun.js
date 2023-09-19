//use regular function =>arguments and this keyword
function add(){
    return arguments[0]+arguments[1];
}
console.log(add(11,12,12,14));

const add2=()=>{
    return arguments[0]+arguments[1];
}
console.log(add2(11,12,12,14));//error

//regular function bind the argument as this keyword
const car = {
    color:"red",
    getSummary:function(){
        return `the car is ${this.color}`
    }
}
console.log(car.getSummary());

//arrow function don't bind the argument as this keyword
const car2 = {
    color:"red",
    getSummary:()=>{
        return `the car is ${this.color}`
    }
}
console.log(car.getSummary());//error