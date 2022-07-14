import React from "react";
import Alert from "react-bootstrap/Alert";

export default function AlertBox(props) {
  const toCapital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      <div className="container">
        <Alert variant={`${props.alert.type}`} dismissible>
          <Alert.Heading>
            <strong>{toCapital(props.alert.type)}</strong>: {props.alert.msg}
          </Alert.Heading>
        </Alert>
      </div>
    )
  );
}
