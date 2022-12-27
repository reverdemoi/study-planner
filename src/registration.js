/* VARIABLES */

export let accounts = [
  // {
  //   id: 1,
  //   email: "albin@nis.nu",
  //   password: "test123",
  //   name: "albin",
  //   tasks: [
  //     { day: "1", task: "Maths homework" },
  //     { day: "4", task: "Biology homework" }
  //   ]
  // }
];
export let curUser = 0;

/* FUNCTIONS / LOGIC */

export const addAcc = function (data) {
  let id = accounts.length + 1;
  accounts.push({
    id: accounts.length + 1,
    email: data.email,
    password: data.password,
    name: data.email.split("@").shift(),
    tasks: []
  });

  curUser = id;

  console.log(accounts);
};

// Gets the data for the current user
export const getCurUserData = function () {
  if (curUser) return accounts.find(el => el.id == curUser);
};

export const addTask = function (data) {
  accounts.find(el => el.id == curUser).tasks.push(data);
};
