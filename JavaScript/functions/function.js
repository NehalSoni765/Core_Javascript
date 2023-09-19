let square = function(num){
    const res = num*num;
    return res;
}
const val = square(3);
console.log("square "+val);
function square1 (num){
    console.log(num);
}
square1(10)


const convertFahrentineToCelsius = function(fehrentine){
    const result =  (fehrentine-32)*5/9;
    return result;
}
const value = convertFahrentineToCelsius(32);
console.log("convertFahrentineToCelsius value "+value);

//global scope (convertFahrentineToCelsius,value)
//local scope (fehrentine,result)
//local scope (isFreezing)
const convertFahrentineToCelsius_scope = function(fehrentine){
    const result =  (fehrentine-32)*5/9;
    if(result<=0){
        let isFreezing=true;
    }
    return result;
}
const tempOne = convertFahrentineToCelsius_scope(32);
console.log("convertFahrentineToCelsius scope value "+tempOne);

//Multiple argument
const add = function(a,b){
    return a+b;
}
console.log("multi argument "+add(2,3));

//Default argument
const getSore = function(name="Anonymous",score=0){//default variable
    console.log("name: "+name);
    console.log("score: "+score);
    return `Name: ${name} -Score:${score}`;
}
console.log("default arg "+getSore("andrew",100));
