// import * as data from "./database.js";

// import * as ses from "./sessionStorage.js";
import * as UI from "./view.js";
import * as reg from "./registration.js";

const start = function () {
  /* Logic */
  // Get current user and it's data
  // ses.update(ses.accounts, ses.curUser);

  /* UI */
  UI.inputForm.addEventListener("submit", ev => {
    ev.preventDefault();

    reg.addTask(UI.getTaskData());
    UI.submitted();
  });
  UI.clrBtn.addEventListener("click", ev => UI.clearTasks(ev));

  /* Registration */
  UI.regBtn.addEventListener("click", ev => {
    UI.renderRegScreen();
    UI.toggleMainInterface();
  });

  // Registers an account
  UI.regForm.addEventListener("submit", ev => {
    ev.preventDefault();

    // Adds account to account array with the entered data which it collects from the registration form through view.js
    reg.addAcc(UI.getData());

    UI.hideRegScreen();
    UI.toggleMainInterface();
    UI.renderGreeting(reg.getCurUserData().name);
  });

  UI.loginBtn.addEventListener("click", ev => {
    // TESTER
    console.log("----- Accounts Array -----");
    console.log(reg.accounts);

    console.log("----- curUser -----");
    console.log(reg.curUser);

    console.log("----- curUser's Data -----");
    console.log(reg.getCurUserData());
  });
};

const init = function () {
  // Get the planner setup
  start();

  if (!reg.curUser) {
    UI.renderRegScreen();
    UI.toggleMainInterface();
    return;
  }

  // UI.renderMainInterface();
  UI.renderGreeting(reg.getCurUserData().name);
  UI.renderTasks(reg.getCurUserData().tasks);
};

window.onload = function () {
  init();
};
