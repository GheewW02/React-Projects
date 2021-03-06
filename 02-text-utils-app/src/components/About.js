import React, { useState } from "react";

import { Accordion, Button } from "react-bootstrap";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#051f36",
    border: "1px solid blue",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "#051f36") {
      setMyStyle({
        color: "white",
        backgroundColor: "#051f36",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "#051f36",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container my-3" style={myStyle}>
        <h1>About Us </h1>
        <Accordion defaultActiveKey="0" style={myStyle}>
          <Accordion.Item eventKey="0" style={myStyle}>
            <Accordion.Header style={myStyle}>
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" style={myStyle}>
            <Accordion.Header style={myStyle}>
              Accordion Item #2
            </Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" style={myStyle}>
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body style={myStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="container my-3">
          <Button onClick={toggleStyle} variant="primary">
            {btnText}
          </Button>
        </div>
      </div>
    </>
  );
}
