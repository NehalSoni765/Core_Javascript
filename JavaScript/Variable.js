console.log("hello ");

if(true){
    if(true){
        name="varOne"//set variable with var data type use it anywhere
        console.log(name);
    }
}
if(true){
    console.log(name);
}
//hoisting concepts
console.log("age "+age);//age initialize as global scope 
var age=10;//age value declare
// console.log("age1 "+age1);//error age1 not initialize at scope
// let age1;

var firstName = 'Andrew'
firstName='Jan'
var firstName = 'Andrew'//overwrite
console.log("var fn "+firstName);

//var = reassigned,overwrite
//let = reassigned but not declare same variable with data type of let
//const = work as final keyword : do not reassigned

//var functional based scope / let-const block based scope
if(10==10){
    var functional_name = "Gion"
    let block_name = "Gion"
}
console.log("functional_name "+functional_name);
// console.log("block_name "+block_name);//error

const setName = function(){
    var set_function_name = "hff"
}
setName()
// console.log("setName "+set_function_name);//eroor