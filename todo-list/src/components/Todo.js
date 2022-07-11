import React from "react";

export default function Todo({ todo }) {
  console.log(todo.task);
  return (
    <div className="container">
      <input type="checkbox" />
      <h1>{todo.task}</h1>
      <button>X</button>
    </div>
  );
}
