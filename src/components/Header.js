function Header({ curUser, setShowRegForm, setShowLoginForm }) {
  return (
    <header className="foreground">
      <h5 className="greeting">
        {curUser ? `Welcome ${curUser.name}` : "Please log in"}
      </h5>

      <button id="login--button" onClick={() => setShowLoginForm(true)}>
        Login
      </button>
      <button id="register--button" onClick={() => setShowRegForm(true)}>
        Register
      </button>

      <h1>Study Planner</h1>
    </header>
  );
}

export default Header;
