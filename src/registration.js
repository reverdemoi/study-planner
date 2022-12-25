import * as UI from "./UI.js";
import { handleJSON, update } from "./sessionStorage.js";

// Registers an accounts
// Account gets pushed into sessionStorage
// Tasks that are generated while account is logged in --> render and add to accounts task
// Update sessionStorage accuratly

export let accounts = [
  {
    id: 0,
    email: "albin@nis.nu",
    password: "test123",
    name: "albin",
    tasks: [
      { day: "1", task: "Maths homework" },
      { day: "4", task: "Biology homework" }
    ]
  }
];
export let curUser = 0;

if (!curUser) {
  console.log("No one is logged in");
}

const renderRegScreen = function (ev) {
  UI.regDiv.classList.remove("hidden");
};

const getData = function (ev) {
  ev.preventDefault();

  const email = UI.regEmailEl.value;
  const name = email.split("@").shift();
  const id = accounts.length + 1;

  accounts.push({
    id: id,
    email: email,
    password: UI.regPasswordEl.value,
    name: name,
    tasks: []
  });
  curUser = id;

  update(accounts);
  console.log(window.sessionStorage);

  handleJSON("set", "curUser", id);

  // Renders the whole app
  UI.renderApp(name);
};

export const getCurUserData = function () {
  return accounts.find((el) => el.id == curUser);
};

UI.regBtn.addEventListener("click", (ev) => renderRegScreen(ev));
UI.regForm.addEventListener("submit", (ev) => getData(ev));
