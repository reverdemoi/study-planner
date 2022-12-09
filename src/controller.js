import * as UI from "./UI.js"

const init = function() {
  // Get the planner setup
  console.log(UI.tasks);
  UI.start(UI.tasks);

  // Get the login logic up and running
}

window.onload = function () {
  // console.log(UI.tasks);

  init();
}