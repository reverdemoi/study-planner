import * as UI from "./UI.js"
import * as reg from "./registration.js"

const init = function() {
  // Get the planner setup
  UI.start(UI.tasks);
}

window.onload = function () {
  init();
}