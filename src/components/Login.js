import React, { useState } from "react";

function Login({ accounts, setCurUser, showLoginForm, setShowLoginForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();

    const user = accounts.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      setCurUser(user);
      setShowLoginForm(false);
    } else {
      alert("Email and/or password does not match an account");
    }
  }

  return (
    <div className={`popup login--popup ${showLoginForm ? "" : "hidden"}`}>
      <form className="login--form" onSubmit={ev => handleSubmit(ev)}>
        <h5>LOGIN</h5>
        <label htmlFor="name">Enter your email: </label>
        <input
          type="text"
          className="login--input_email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="name">Enter your desired password: </label>
        <input
          type="text"
          className="login--input_password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Login;
