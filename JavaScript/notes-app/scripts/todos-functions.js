'use strict'

const getSavedTodo = () => {
  const jsonObject = localStorage.getItem("todos");
  try {
    return jsonObject ? JSON.parse(jsonObject) : [];
  } catch (e) {
    return [];
  }
};

const saveTodos = (todos) =>
  localStorage.setItem("todos", JSON.stringify(todos));

const sortNotes = () => {
  if (formValues.sortBy === "byEdited") {
    return todos.sort(function (a, b) {
      if (a.updateDate < b.updateDate) {
        return 1;
      } else if (a.updateDate > b.updateDate) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (formValues.sortBy === "byCreated") {
    return todos.sort(function (a, b) {
      if (a.createDate < b.createDate) {
        return -1;
      } else if (a.createDate > b.createDate) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return todos.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

const renderNotes = (isHide) => {
  sortNotes();
  const todosElem = document.querySelector("#todos");
  todosElem.innerHTML = "";
  console.log("todos ",todos);
  const filterTodos = todos.filter((val) =>
    val.title.toLowerCase().includes(formValues.text.toLowerCase())
  );
  console.log("filterTodos ",filterTodos);
  if(isHide){
    todosElem.innerHTML = "";
    return;
  }

  if(filterTodos.length>0){
    const incomplete = filterTodos.filter((val) => !val.completed);
    todosElem.appendChild(generateSummaryDom(incomplete));
    filterTodos.forEach((val) =>
    todosElem.appendChild(generateTodoDOM(val))
    );
  }else{
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = "No notes to show"
    emptyMessage.classList.add("empty-message");
    todosElem.appendChild(emptyMessage);
  } 
};

const generateTodoDOM = (val) => {
  const divElemnt = document.createElement("div");
  const checkbox = document.createElement("input");
  const anchorElemt = document.createElement("a");
  // const buttonElem = document.createElement("button");
  const statusElem = document.createElement("p");

  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = val.completed;
  divElemnt.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleTodo(val.uuid);
    renderNotes();
  });

  // anchorElemt.textContent = val.title;
  // anchorElemt.setAttribute("href", `edit.html#${val.uuid}`);
  // divElemnt.appendChild(anchorElemt);
 
  // buttonElem.textContent = "x";
  // divElemnt.appendChild(buttonElem);

  // buttonElem.addEventListener("click", function () {
  //   removeTodo(val.uuid);
  //   renderNotes();
  // });
  // return divElemnt;

  anchorElemt.setAttribute("href", `edit.html#${val.uuid}`);
  anchorElemt.classList.add("list-item");

  const todoEl = document.createElement("p");
  todoEl.textContent = val.title
  todoEl.classList.add("list-item__title");
  anchorElemt.appendChild(todoEl);

  statusElem.textContent = generateLastEdited(val.updateDate);
  statusElem.classList.add("list-item__subtitle");
  anchorElemt.appendChild(statusElem);

  return anchorElemt;
};

const toggleTodo = (uuid) => {
  const todo = todos.find((val) => val.uuid === uuid);
  if (todo != undefined) {
    todo.completed = !todo.completed;
  }
  saveTodos(todos);
};

const removeTodo = (uuid) => {
  const index = todos.findIndex((val) => val.uuid === uuid);
  if (index > -1) {
    todos.splice(index, 1); //index,how many want ot delete
    saveTodos(todos);
  }
};

const generateSummaryDom = (filterTodos) => {
  const h2element = document.createElement("h2");
  h2element.textContent = `You have ${filterTodos.length} todos left`;
  return h2element;
};

//new concept of same browser same page content update
window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    todos = JSON.parse(e.newValue);
    renderNotes();
  }
});

const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()} `;
};
// //date
// const date = moment();
// console.log("date : ",date.toString());
// date.add(1,"year");
// console.log("update date : ",date.toString());
// console.log("date : ",date.format("MMMM Do, YYYY"));
// //timestamp
// const timestamp = date.valueOf();
// console.log("timestamp ",timestamp);
// console.log("timestamp->string: ",moment(timestamp).toString());

const bd = moment();
bd.year(2000).month(10).date(27);
console.log(bd.format("MMM DD,YYYY"));
