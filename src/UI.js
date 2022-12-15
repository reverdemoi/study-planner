// IF YOU SEE THIS - IT WORKED


/* TODO */

// Start up a dataserver - mysql
// Implement login and registration
// Organize the code

/* Element selection */

const clr_btn = document.querySelector(".clear--button")
const input_field = document.querySelector(".input--text");
const input_form = document.querySelector(".input--form");
const selectEl = document.querySelector("#days-dropdown")
const titelsEl = document.querySelectorAll(".day-title")
const tasksUlEl = document.querySelectorAll(".tasks")

/* Variables */

let days = {
  0: document.querySelector("#mon-tasks"),  
  1: document.querySelector("#tue-tasks"),  
  2: document.querySelector("#wed-tasks"),  
  3: document.querySelector("#thu-tasks"),  
  4: document.querySelector("#fri-tasks"),  
  5: document.querySelector("#sat-tasks"),  
  6: document.querySelector("#sun-tasks"),  
}

const myStorage = window.sessionStorage;

if (!sessionStorage.tasks) sessionStorage.setItem("tasks", JSON.stringify([]))
export let tasks = JSON.parse(sessionStorage.getItem("tasks"))

/* Logic */

const bottomBorder = function() {
  titelsEl.forEach(el => el.classList.add("border"));
}

const renderSessionStorage = function (tasks) {
  // If there is not tasks stored in session storage --> return
  if (!tasks[0]) return;

  // Adds bottom border
  bottomBorder();

  // Add to correct column
  tasks.forEach(el => {
    let day = days[Object.values(el)[0]];
    let value = Object.values(el)[1] 

    day.insertAdjacentHTML("beforeend", `<li class="task">${value}</li>`);
  })
}

const addToObj = function (ev) {
  // Adds task to array
  tasks.push({day: selectEl.value, task: input_field.value});

  // Updating sessionStorage
  myStorage.setItem("tasks", JSON.stringify(tasks));
}

const submitted = function (ev) {
  ev.preventDefault();
  
  // Return if neither a day or task selected
  if (!input_field.value || selectEl.value == "select") { 
    return;
  }

  // Adds task to UI & sessionStorage 
  addToObj(ev);

  // Adds a bottom border to titles
  bottomBorder();

  // Add to correct column
  days[selectEl.value].insertAdjacentHTML("beforeend", `<li class="task">${input_field.value}</li>`);
}

const clear = function (ev) {
  ev.preventDefault();

  // Clears sessionstorage & tasks array
  sessionStorage.setItem("tasks", JSON.stringify([]));
  tasks = JSON.parse(myStorage.getItem("tasks"));
  
  // Clears UI
  tasksUlEl.forEach(el => {
    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }
  });
  titelsEl.forEach(el => el.classList.remove("border"));
}

// Event listener

export const start = function (tasks) {
  renderSessionStorage(tasks);
  input_form.addEventListener("submit", ev => submitted(ev));
  clr_btn.addEventListener("click", ev => clear(ev));
};