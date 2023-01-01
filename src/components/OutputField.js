const days = [
  { id: 0, day: "Monday" },
  { id: 1, day: "Tuesday" },
  { id: 2, day: "Wednesday" },
  { id: 3, day: "Thursday" },
  { id: 4, day: "Friday" },
  { id: 5, day: "Saturday" },
  { id: 6, day: "Sunday" }
];

function OutputField({ curUser }) {
  return (
    <div className="output">
      {days.map((dayEl, index) => {
        return (
          <div className="column" key={dayEl.id}>
            <h3
              className={`day-title ${
                curUser && curUser.tasks[0] ? "border" : ""
              }`}
            >
              {days[index].day}
            </h3>
            <ul className="tasks" id={dayEl.id}>
              {curUser
                ? curUser.tasks.map((task, index) =>
                    +task.day === dayEl.id ? (
                      <li className={"task"} key={task.day + index}>
                        {task.task}
                      </li>
                    ) : (
                      ""
                    )
                  )
                : ""}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default OutputField;
