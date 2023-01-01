import React, { useState } from "react";
import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Registration from "./components/Registration.js";
import Login from "./components/Login.js";
import "./style.css";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [curUser, setCurUser] = useState(undefined);
  const [showRegForm, setShowRegForm] = useState(curUser ? false : true);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      <div
        className={`overlayEl ${showRegForm || showLoginForm ? "overlay" : ""}`}
      >
        <Header
          accounts={accounts}
          curUser={curUser}
          setShowRegForm={setShowRegForm}
          setShowLoginForm={setShowLoginForm}
        />
        <Section curUser={curUser} setCurUser={setCurUser} />
      </div>

      {showRegForm ? (
        <Registration
          accounts={accounts}
          setAccounts={setAccounts}
          curUser={curUser}
          setCurUser={setCurUser}
          showRegForm={showRegForm}
          setShowRegForm={setShowRegForm}
        />
      ) : null}

      {showLoginForm ? (
        <Login
          accounts={accounts}
          setAccounts={setAccounts}
          curUser={curUser}
          setCurUser={setCurUser}
          showLoginForm={showLoginForm}
          setShowLoginForm={setShowLoginForm}
        />
      ) : null}
    </>
  );
}

export default App;
