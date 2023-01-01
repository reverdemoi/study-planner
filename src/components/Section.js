import Form from "./Form.js";
import OutputField from "./OutputField.js";
import React, { useState } from "react";

function Section({ curUser, setCurUser }) {
  const [day, setDay] = useState("");
  const [task, setTask] = useState("");

  return (
    <section>
      <Form
        day={day}
        setDay={setDay}
        task={task}
        setTask={setTask}
        curUser={curUser}
        setCurUser={setCurUser}
      />
      <OutputField curUser={curUser} />
    </section>
  );
}

export default Section;
