import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Button was clicked."+ text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase.", "success");
  };

  const handleLowClick = () => {
    // console.log("Button was clicked."+ text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("converted to lowercase.", "success");
  };

  const handleOnChange = (e) => {
    // console.log("On change");
    setText(e.target.value);
  };

  const handleClearText = (e) => {
    let newtext = "";
    setText(newtext);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <Form
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>
          <Form.Group className="my-3">
            <Form.Control
              style={{
                backgroundColor: props.mode === "dark" ? "#051f36" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              as="textarea"
              rows={10}
              value={text}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button className="btn btn-1 mx-2 " onClick={handleUpClick}>
            Convert to uppercase
          </Button>

          <Button className="btn btn-2 mx-2 " onClick={handleLowClick}>
            Convert to lowercase
          </Button>

          <Button className="btn btn-2 mx-2 " onClick={handleClearText}>
            Clear Text
          </Button>
        </Form>
        <div className="container my-3">
          <h2>Text Summary</h2>
          <p>
            {text.length} characters and {text.split(" ").length} words.
          </p>
          <p>It takes {0.008 * text.split(" ").length} minutes to read.</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
