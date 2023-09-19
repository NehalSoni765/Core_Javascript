// const p = document.querySelector('p')
// p.remove

const p = document.querySelectorAll('p')
p.forEach(function(p){
    p.textContent = "****"
    // p.remove()
})

//add a new element
const paragraph = document.createElement("p")
paragraph.textContent = 'This is a new element from Javascript.'
document.querySelector('body').appendChild(paragraph)


//button listner 
document.querySelector('button').addEventListener('click',function(event){//document.querySelector('#create-node').addEventListener('click',function(event){
    console.log("This from button ",event.target.textContent);
    event.target.textContent='This button clicked'
})

//remove all node
document.querySelectorAll('button')[1].addEventListener('click',function(event){
    document.querySelectorAll(".node").forEach(function(p){
        p.remove()
    })
})


const notes = [{
    title:"my next trip",
    body:"i would like to go to spain"
},{
    title:"Hobbits to work on",
    body:"Excercise.Eating a bit better"
},{
    title:"Office modification",
    body:"Get a new seat"
}]
let searchContext = "";
const renderNotes = function(searchContext){
    const filterNote = notes.filter(function(note){
        return note.title.toLowerCase().includes(searchContext)
    })
    filterNote.forEach(function(note){
        const element = document.createElement('p')
        element.textContent = note.title
        document.querySelector('body').appendChild(element);
    })
    console.log("filter ",filterNote);
}
// renderNotes();
document.querySelector("#input-text").addEventListener("input",function(e){
    searchContext = e.target.value;
    renderNotes(searchContext)
})


document.querySelector('#checkbox').addEventListener("change",function(e){
    console.log(e.target.checked)
})