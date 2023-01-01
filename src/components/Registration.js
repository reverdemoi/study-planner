import React, { useState } from "react";

function Registration({
  accounts,
  setAccounts,
  setCurUser,
  showRegForm,
  setShowRegForm
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();

    const data = {
      id: accounts.length + 1,
      email: email,
      password: password,
      name: email.split("@").shift(),
      tasks: []
    };
    setAccounts([...accounts, data]);
    setCurUser(data);

    // Close form
    setShowRegForm(false);
  }

  return (
    <div className={`popup registration--popup ${showRegForm ? "" : "hidden"}`}>
      <form className="registration--form" onSubmit={ev => handleSubmit(ev)}>
        <h5>REGISTRATION</h5>
        <label htmlFor="name">Enter your email: </label>
        <input
          type="text"
          className="registration--input_email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="name">Enter your desired password: </label>
        <input
          type="text"
          className="registration--input_password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Registration;
