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