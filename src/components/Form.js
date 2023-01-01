function Form({ day, setDay, task, setTask, curUser, setCurUser }) {
  function handleSubmit(ev) {
    ev.preventDefault();

    // Update the curUser's tasks array
    const updatedUser = curUser;
    updatedUser.tasks.push({ day: day, task: task });
    setCurUser(updatedUser);

    // This in turn re-renders the this jsx
    setDay("select");
    setTask("");
  }

  return (
    <>
      <form className="input--form" onSubmit={ev => handleSubmit(ev)}>
        <select
          name="days"
          id="days-dropdown"
          value={day}
          onChange={e => setDay(e.target.value)}
        >
          <option value="select" hidden>
            Select an option
          </option>
          <option value="0">Monday</option>
          <option value="1">Tuesday</option>
          <option value="2">Wednesday</option>
          <option value="3">Thursday</option>
          <option value="4">Friday</option>
          <option value="5">Saturday</option>
          <option value="6">Sunday</option>
        </select>
        <br />
        <input
          placeholder="Maths homework..."
          type="text"
          className="input--text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
      </form>
      <button className="clear--button">Clear</button>
    </>
  );
}

export default Form;
