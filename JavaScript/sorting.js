const notes = [{
    title:"Order cat food",
    completed:false
},{
    title:"Clean kitchen",
    completed:true
},{
    title:"Buy food",
    completed:true
},{
    title:"Do work",
    completed:true
},{
    title:"Excercise",
    completed:false
}]

const sortNotes = notes.sort(function(a,b){
    if(!a.completed&&b.completed)return -1;
    else if(a.completed==b.completed)return 0;
    else return 1;
    //using title
    // if(a.title.toLowerCase()<b.title.toLowerCase()){
    //     return -1;
    // }else if(a.title.toLowerCase()===b.title.toLowerCase()){
    //     return 0;
    // }else{
    //     return 1;
    // }
})

console.log("sortNotes ",sortNotes);