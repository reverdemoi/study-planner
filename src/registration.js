import * as UI from "./UI.js";

export let accounts = [
  {
    id: 1,
    email: "albin@nis.nu",
    password: "password",
  }
];
let curUser = false;

const renderRegScreen = function (ev) {
  UI.regDiv.classList.remove("hidden");
}

const getData = function(ev) {
  ev.preventDefault();

  const email = UI.regEmailEl.value;
  const password = UI.regPasswordEl.value;

  accounts.push({
    id: accounts.length + 1,
    email: email,
    password: password,
  })

  console.log(accounts);
}

UI.regBtn.addEventListener("click", ev => renderRegScreen(ev))
UI.regForm.addEventListener("submit", ev => getData(ev))









/* REGISTRATION */

// const data = {
//   name: 'John',
//   age: 30
// };

// const json = JSON.stringify(data);

// file.writeFile('data.json', json, 'utf8', (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });