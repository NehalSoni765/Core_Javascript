'use strict'

const todoId = location.hash.substring(1);
let todos = getSavedTodo();

let todo = todos.find(todo=>todo.uuid===todoId);
if(!todo){
    location.assign("index.html");
}
const dateElement = document.querySelector("#last-edited");
dateElement.textContent= generateLastEdited(todo.updateDate);

const titleElem = document.querySelector("#todo-title");
titleElem.value = todo.title;
titleElem.addEventListener("change",(event)=>{
    todo.title = event.target.value;
    todo.updateDate = moment().valueOf();
    dateElement.textContent= generateLastEdited(todo.updateDate);
    saveTodos(todos);
})

const bpdyElem = document.querySelector("#todo-body");
bpdyElem.value = todo.body;
bpdyElem.addEventListener("change",(event)=>{
    todo.body = event.target.value;
    todo.updateDate = moment().valueOf();
    dateElement.textContent= generateLastEdited(todo.updateDate);

    saveTodos(todos);
})

const removeTodoButton = document.querySelector("#remove-todo");
removeTodoButton.addEventListener("click",()=>{
    removeTodo(todo.uuid);
    location.assign("index.html");
})


//new concept of same browser same page content update this work for edit page
window.addEventListener("storage",(e)=>{
    if(e.key==="todos"){
        todos =JSON.parse(e.newValue);
        todo = todos.find(todo=>todo.uuid===todoId);
        if(!todo){
            location.assign("index.html");
        }
        titleElem.value = todo.title;
        bpdyElem.value = todo.body;
    }
})