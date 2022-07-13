import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Todo() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);

  const addItems = () => {
    if (!task) {
    } else {
      setItems([...items, task]);
      setTask("");
    }
  };

  const deleteItem = (id) => {
    const deletedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(deletedItems);
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <div className="container">
        <div className="add-items">
          <input
            type="text"
            placeholder="Add tasks..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          {/* <BsPlusLg onClick={addItems} /> */}
          <button className="btn-add" onClick={addItems}>
            <BsPlusLg />
            ADD
          </button>
        </div>

        <div className="show-items">
          {items.map((elem, ind) => {
            return (
              <div
                className="each-items"
                key={ind}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{elem}</h3>
                <button className="btn-delete" onClick={() => deleteItem(ind)}>
                  {" "}
                  <RiDeleteBin6Line />
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <div className="delete">
          <button className="btn-delete-all" onClick={deleteAll}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}
