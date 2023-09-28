import { add } from "./utils";
console.log("ADD " + add(2, 3));

const authorName = "Jan";
console.log(authorName);

class Hangman {
  method() {
    return "Testing";
  }
}

const hangman = new Hangman();
console.log(hangman.method());

// //calculate avg using class component
// const calculateAvg = (...numbers)=>{
//     let sum = 0;
//     numbers.forEach(num=>sum+=num);
//     const avg = sum/numbers.length;
//     return `The avg grade is ${avg}`
// }
// console.log(calculateAvg(6,70,80,50,90));

const calculateAvg = (thing, ...numbers) => {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  const avg = sum / numbers.length;
  return `The avg ${thing} is ${avg}`;
};
console.log(calculateAvg("grade", 6, 70, 80, 50, 90));

const createTeam = (teamName, coach, ...players) => {
  console.log("Teams : ", teamName);
  console.log("Coach : ", coach);
  console.log(`Teams : ${players.join(", ")}`);
};
console.log(
  createTeam("Liberty", "Casey Penn", "Marge", "Aiden", "Herbert", "Sherry")
);

const team = {
  name: "Liberty",
  coach: "Casey Penn",
  players: ["Marge", "Aiden", "Herbert", "Sherry"],
  details:"grocerry"
};
console.log(team.players);
createTeam(team.name, team.coach, ...team.players);

//destructuring {name:teamName is assign value to teamName variable}
//assign destructureing variable is default value
const { name:formName, coach, players,details:otherDetails="No details provided",...other } = team;
console.log("details ", formName);
console.log("otherDetails ", otherDetails);
console.log("other ", other);


const age = [33,25,4,35]
// const [firstage,secondage,,lastage] = age
// console.log("lastage ",lastage);

const [firstage,...otherAges] = age
console.log("otherAges ",otherAges);

const printTeam =({name,coach})=>{
    console.log(`${name}: ${coach}`);
}
printTeam(team);