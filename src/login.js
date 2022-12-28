export const checkUser = function (accounts, data, curUser) {
  let user = accounts.find(
    el => el.email == data.email && el.password == data.password
  );
  console.log(user.id);

  return user ? user : alert("Email and/or password does not match an account");
};
