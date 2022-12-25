import * as UI from "./UI.js";
import * as reg from "./registration.js";
import * as ses from "./sessionStorage.js";

const init = function () {
  // Get the planner setup
  UI.start();

  // UI.renderSessionStorage(reg.getCurUserData(ses.curUserSes.tasks));
};

window.onload = function () {
  init();
};
