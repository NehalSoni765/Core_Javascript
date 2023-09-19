let todos = getSavedTodo();
const formValues = {
  text: "",
  isHide: false,
  sortBy:"byEdited"
};
renderNotes();

document.querySelector("#form-name").addEventListener("submit", function (e) {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();
  if(text.length>0){
    e.preventDefault();
    const timestamp = moment().valueOf();
    formValues.text = text;
  
    todos.push({
      title: text,
      completed: false,
      uuid: window.uuidv4(),
      createDate: timestamp,
      updateDate: timestamp,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    renderNotes();
  }
  });

document.querySelector("#hide-completed").addEventListener("change", function (e) {
  formValues.isHide = e.target.checked;
  renderNotes(formValues.isHide);
});

document.querySelector("#filter-by").addEventListener("change",function(e){
  formValues.sortBy = e.target.value;
  renderNotes();
})