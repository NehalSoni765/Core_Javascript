//sync
const puzzle1 = getPuzzleSync()
console.log("puzzle1");

const puzzle2 = getPuzzleSync()
console.log("puzzle2");

console.log("sync function end");

//async
puzzleasync1(()=>console.log("async1"))
puzzleasync2(()=>console.log("async2"))

console.log("async function end");