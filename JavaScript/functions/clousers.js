//why we use closure : it always return a object (as function) so we can not change variable value directly;
// quick closure is combination of function

const myFunction = () => {
    const message = "This is my function";
    function printMessage(){
        console.log(message);
    }
    return printMessage;
}

const myPrintMessage = myFunction();
myPrintMessage()


const createCounter = ()=>{
     let count=0;
     return {
        increment(){
            count++;
        },
        decrement(){
            count--;
        },
        getCount(){
            return count;
        }
     }
}
const counter = createCounter();
console.log(counter);
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());

//adder
const createAdder=(a)=>{
    return (b)=>a+b;
}
const add10 = createAdder(10);
console.log(add10);
console.log(add10(2));

//tip
const createTipper = (baseTip)=>{//0.15
    return (amount)=>{//1000
        return amount*baseTip;
    }
}

const tip20 = createTipper(0.1);
const tip15 = createTipper(0.15);
console.log(tip20(1000));
console.log(tip15(1000));