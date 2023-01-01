import * as UI from "./view.js";
import * as reg from "./registration.js";
import * as login from "./login.js";

const start = function () {
  /* UI */

  // Submits a task
  UI.inputForm.addEventListener("submit", ev => {
    ev.preventDefault();

    reg.addTask(UI.getTaskData());
    UI.submitted();
  });

  // Clears task array
  UI.clrBtn.addEventListener("click", ev => UI.clearTasks(ev));

  /* Registration */

  // Presses registration
  UI.regBtn.addEventListener("click", ev => {
    UI.renderRegScreen();
    UI.toggleMainInterface();
  });

  // Registers an account
  UI.regForm.addEventListener("submit", ev => {
    ev.preventDefault();

    // Adds account to account array
    reg.addAcc(UI.getRegData());

    UI.hideRegScreen();
    UI.toggleMainInterface();
    UI.clearTasks(); // - may cause issues
    UI.renderGreeting(reg.getCurUserData().name);
    UI.clearInput();
  });

  /* LOGIN */

  // Presses login
  UI.loginBtn.addEventListener("click", ev => {
    UI.renderLoginScreen();
    UI.toggleMainInterface();
  });

  // Logs in
  UI.loginForm.addEventListener("submit", ev => {
    ev.preventDefault();

    let data = login.checkUser(reg.accounts, UI.getLoginData());
    if (data) {
      reg.updateCurUser(data.id);
      UI.updateUI(reg.getCurUserData().tasks);
    }

    UI.hideLoginScreen();
    UI.toggleMainInterface();
    UI.renderGreeting(reg.getCurUserData().name);
    UI.clearInput();
  });

  /* DEVELOPMENT */

  // Logs important data
  UI.helperBtn.addEventListener("click", ev => {
    UI.clearInput();

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

  // If no user --> register
  if (!reg.curUser) {
    UI.renderRegScreen();
    UI.toggleMainInterface();
    return;
  }

  // If user is logged in on start --> render their tasks and a greeting
  UI.renderGreeting(reg.getCurUserData().name);
  UI.renderTasks(reg.getCurUserData().tasks);
};

window.onload = function () {
  init();
};
