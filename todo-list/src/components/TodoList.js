import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <div className="container">
      <ul>
        {todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
