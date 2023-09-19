// const todos = [{
//     title:"Order cat food",
//     completed:false
// },{
//     title:"Clean kitchen",
//     completed:true
// },{
//     title:"Buy food",
//     completed:true
// },{
//     title:"Do work",
//     completed:true
// },{
//     title:"Excercise",
//     completed:false
// }]
// const formValues = {
//     text:"",
//     isHide:false
// }
// const renderNotes = function(){
//     document.querySelector("#todos").innerHTML="";
//     const filterTodos = todos.filter((val)=>val.title.toLowerCase().includes(formValues.text.toLowerCase()) && !val.completed&&!formValues.isHide)

//     const h2element = document.createElement("h2")
//     h2element.textContent = `You have ${filterTodos.length} todos left`;
//     document.querySelector("#todos").appendChild(h2element);

//     filterTodos.forEach((val)=>{
//         const todo = document.createElement("p")
//         todo.textContent = val.title
//         document.querySelector("#todos").appendChild(todo);
//     })
// }
// document.querySelector("#form-name").addEventListener("submit",function(e){
//     e.preventDefault();
//     const {text} = e.target.elements
//     formValues.text = text.value
//     todos.push({title:formValues.text,completed:false})
//     renderNotes();
// })
// document.querySelector("#checkbox").addEventListener("change",function(e){
//     formValues.isHide = e.target.checked
//     renderNotes()
// })

//using localstorage with code factoring

let todos = getSavedTodo();
const formValues = {
  text: "",
  isHide: false,
  sortBy:"byEdited"
};
renderNotes();

document.querySelector("#form-name").addEventListener("submit", function (e) {
  e.preventDefault();
  const timestamp = moment().valueOf();
  const { text } = e.target.elements;
  formValues.text = text.value;

  todos.push({
    title: formValues.text,
    completed: false,
    uuid: window.uuidv4(),
    createDate: timestamp,
    updateDate: timestamp,
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderNotes();
});

document.querySelector("#hide-completed").addEventListener("change", function (e) {
  formValues.isHide = e.target.checked;
  renderNotes(formValues.isHide);
});

document.querySelector("#create-note").addEventListener("click", function () {
  const uuid = window.uuidv4();
  const timestamp = moment().valueOf();
  todos.push({ title: formValues.text, completed: false, uuid: uuid, body:"", createDate: timestamp, updateDate:timestamp });
  saveTodos(todos);
  location.assign(`edit.html#${uuid}`);
  // renderNotes();
});

document.querySelector("#filter-by").addEventListener("change",function(e){
  formValues.sortBy = e.target.value;
  renderNotes();
})