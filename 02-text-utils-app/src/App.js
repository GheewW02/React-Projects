import React, { useState } from "react";
import About from "./components/About";
import AlertBox from "./components/AlertBox";
import Navibar from "./components/Navibar";
import TextForm from "./components/TextForm";

export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051f36";
      showAlert("Dark mode has been enabled!!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!!!", "success");
    }
  };
  return (
    <>
      <Navibar mode={mode} toggleMode={toggleMode} />
      <AlertBox alert={alert} />
      <TextForm mode={mode} heading="Text Util App." />
      <About mode={mode} />
    </>
  );
}
