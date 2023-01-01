/* Element selection */

export const clrBtn = document.querySelector(".clear--button");
const inputField = document.querySelector(".input--text");
export const inputForm = document.querySelector(".input--form");
const selectEl = document.querySelector("#days-dropdown");
const titelsEl = document.querySelectorAll(".day-title");
const tasksUlEl = document.querySelectorAll(".tasks");
const mainEls = document.querySelectorAll(".foreground");
const greetingEl = document.querySelector(".greeting");

const overlay = document.querySelector(".overlayEl");

export const regBtn = document.querySelector("#register--button");
export const regDiv = document.querySelector(".registration--popup");
export const regForm = document.querySelector(".registration--form");
export const regEmailEl = document.querySelector(".registration--input_email");
export const regPasswordEl = document.querySelector(
  ".registration--input_password"
);

export const loginBtn = document.querySelector("#login--button");
export const loginDiv = document.querySelector(".login--popup");
export const loginForm = document.querySelector(".login--form");
export const loginEmailEl = document.querySelector(".login--input_email");
export const loginPasswordEl = document.querySelector(".login--input_password");

export const helperBtn = document.querySelector("#helper--button");

/* Variables */

export let days = {
  0: document.querySelector("#mon-tasks"),
  1: document.querySelector("#tue-tasks"),
  2: document.querySelector("#wed-tasks"),
  3: document.querySelector("#thu-tasks"),
  4: document.querySelector("#fri-tasks"),
  5: document.querySelector("#sat-tasks"),
  6: document.querySelector("#sun-tasks")
};

/* Logic */

// Creates a bottom border for all the titles
const bottomBorder = function () {
  titelsEl.forEach(el => el.classList.add("border"));
};

const hideBottomBorder = function () {
  titelsEl.forEach(el => el.classList.remove("border"));
};

export const renderTasks = function (tasks) {
  tasks.forEach(el => {
    let day = days[Object.values(el)[0]];
    let value = Object.values(el)[1];

    day.insertAdjacentHTML("beforeend", `<li class="task">${value}</li>`);
  });

  bottomBorder();
};

export const getTaskData = function () {
  return { day: selectEl.value, task: inputField.value };
};

export const submitted = function () {
  // Return if neither a day or task selected
  if (!inputField.value || selectEl.value == "select") {
    return;
  }

  // Adds a bottom border to titles
  bottomBorder();

  // Add to correct column
  days[selectEl.value].insertAdjacentHTML(
    "beforeend",
    `<li class="task">${inputField.value}</li>`
  );
};
// {
/* <li class="task--item"> <input type="checkbox" id="task-${el.id}"/> <label for="task-${el.id}">${el.task}</label> </li>  */
// }

export const clearTasks = function () {
  // IMPLEMENT CLEARING TASKS FROM USER DATA ASWELL

  // Clears UI
  tasksUlEl.forEach(el => {
    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }
  });
  titelsEl.forEach(el => el.classList.remove("border"));
};

export const clearInput = function () {
  inputField.value = "";
  selectEl.value = "select";
};

export const renderGreeting = function (user) {
  greetingEl.textContent = `Welcome ${user}`;
};
// ABOVE AND UNDER IS CONNECTED
export const renderApp = function (user) {
  mainEls.forEach(el => el.classList.remove("hidden"));
};

export const renderRegScreen = function () {
  overlay.classList.toggle("overlay");
  regDiv.classList.remove("hidden");
};
export const renderLoginScreen = function () {
  overlay.classList.toggle("overlay");
  loginDiv.classList.remove("hidden");
};

export const hideRegScreen = function () {
  overlay.classList.toggle("overlay");
  regDiv.classList.add("hidden");

  regEmailEl.value = "";
  regPasswordEl.value = "";
};
export const hideLoginScreen = function () {
  overlay.classList.toggle("overlay");
  loginDiv.classList.add("hidden");

  loginEmailEl.value = "";
  loginPasswordEl.value = "";
};

export const toggleMainInterface = function () {
  mainEls.forEach(el => el.classList.toggle("hidden"));
};

// Gets data from registration input
export const getRegData = function () {
  return { email: regEmailEl.value, password: regPasswordEl.value };
};
export const getLoginData = function () {
  return { email: loginEmailEl.value, password: loginPasswordEl.value };
};
export const updateUI = function (tasks) {
  clearTasks();
  hideBottomBorder();
  renderTasks(tasks);
};
