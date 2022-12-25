export const myStorage = window.sessionStorage;

// If there is no accounts entry in sessionStorage --> make one
if (!sessionStorage.accounts) handleJSON("set", "accounts", JSON.stringify([]));

export const handleJSON = function (type, item, entry) {
  if (type == "get") return JSON.parse(myStorage.getItem(item));
  if (type == "set") return myStorage.setItem(item, JSON.stringify(entry));
};

export let accountsSes = handleJSON("get", "accounts");
export let curUserSes = handleJSON("get", "curUser");
console.log(accountsSes);

export const update = function (entry) {
  //Updates sessionStorage's task entry
  handleJSON("set", "tasks", accountsSes);

  // Updates sessionStorage's accounts entry
  handleJSON("set", "accounts", entry);
};

export const clear = function () {
  sessionStorage.setItem("tasks", JSON.stringify([]));
  accountsSes = JSON.parse(myStorage.getItem("tasks"));
};
