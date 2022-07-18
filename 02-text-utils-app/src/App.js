import React, { useState } from "react";
import About from "./components/About";
import AlertBox from "./components/AlertBox";
import Navibar from "./components/Navibar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
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
      <Router>
        <Navibar mode={mode} toggleMode={toggleMode} />
        <AlertBox alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<TextForm showAlert={showAlert} mode={mode} />}
          ></Route>
          <Route path="/about" element={<About mode={mode} />}></Route>
        </Routes>
      </Router>
    </>
  );
}
