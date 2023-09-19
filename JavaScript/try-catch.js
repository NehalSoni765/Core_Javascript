function getAmount( amount){
    if(typeof amount==='number'){
        return 0.5*amount;
    }else{
        throw Error("Argument should be number");
    }
}
// const result = getAmount(true);
// console.log(result);
//above break the next

try{
const result = getAmount(true);
console.log("result ",result);
}catch(e){
console.log(e.message );
}