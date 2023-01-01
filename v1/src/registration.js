/* VARIABLES */

export let accounts = [
  {
    id: 1,
    email: "albin@nis.nu",
    password: "test123",
    name: "albin",
    tasks: [
      { day: "1", task: "Maths homework" },
      { day: "4", task: "Biology homework" }
    ]
  },
  {
    id: 2,
    email: "stefan@nis.nu",
    password: "mypassword",
    name: "stefan",
    tasks: [
      { day: "0", task: "Chemistry homework" },
      { day: "3", task: "English homework" },
      { day: "5", task: "Chill" }
    ]
  }
];
export let curUser = 0;

/* FUNCTIONS / LOGIC */

export const updateCurUser = function (newId) {
  return (curUser = newId);
};

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
