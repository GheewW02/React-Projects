import React, { useState } from "react";
import About from "./components/About";
import AlertBox from "./components/AlertBox";
import Navibar from "./components/Navibar";
import TextForm from "./components/TextForm";

export default function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051f36";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navibar mode={mode} toggleMode={toggleMode} />
      <AlertBox />
      <TextForm mode={mode} heading="Text Util App." />
      <About mode={mode} />
    </>
  );
}
