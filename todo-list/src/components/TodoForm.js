import React, { useState } from "react";
// import uuid from "uuid";
import { v4 as uuid } from "uuid";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            onChange={handleTaskInputChange}
            value={todo.task}
          />
          <button type="submit">ADD</button>
        </form>
      </div>
    </>
  );
}
