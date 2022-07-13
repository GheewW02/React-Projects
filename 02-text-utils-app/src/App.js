import React from "react";
import About from "./components/About";
import Navibar from "./components/Navibar";
import TextForm from "./components/TextForm";

export default function App() {
  return (
    <>
      <Navibar title={{ t1: 3, t2: "gheeww", t3: "aayush", t4: "dai" }} />
      <TextForm heading="Uppercase Converter." />
      {/* <About /> */}
    </>
  );
}
