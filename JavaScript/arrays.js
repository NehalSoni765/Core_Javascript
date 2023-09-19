const notes = ["my","love","barbie","lemon"];
notes.pop();//work as stack
notes.push("cherry");
console.log("stack notes: "+notes);
notes.shift()//work as queue remove at 0th index
notes.unshift("go")//add at 0th index
console.log("queue notes: "+notes);

const array = ["node1","node2","node3","node4"]
//splice = remove (start,end)
array.splice(1,0)
array.splice(1,0,"new node")//add node
console.log("update array: "+array);
array.splice(1,1)
console.log("update array twice: "+array);
//remove 3rd item
array.splice(2,1);
console.log("remove 3rd item: "+array);
//update position
array[3]="node5"
console.log(array);

//foreach
console.log("---- foreach start-----");
array.forEach(function(val,index,arr){
    console.log("val: "+val);
    console.log("index: "+index);
    console.log("array: "+arr);
})
console.log("---- foreach end-----");

const findNote = function(tittle){
    //using index
    const index = array.findIndex(function(item){
        return item.toLowerCase()===tittle.toLowerCase()
    })
    return array[index]
    // //using node
    // const node = array.find(function(item){
    //     return item.toLowerCase()===tittle.toLowerCase()
    // })
    // return node
}
const findNode = findNote('Node2')
console.log("find index "+findNode);


const deleteNode = function(tittle){
    //using index
    const index = array.findIndex(function(item){
        return item.toLowerCase()===tittle.toLowerCase()
    })
    if(index>-1){
        array.splice(index,1)
    }
}
deleteNode('Node2')
console.log("updated index "+array);
