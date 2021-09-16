import "./App.css";
import React from "react";
import Squat from "./Squat.js";
import Bench from "./Bench.js";
import Curl from "./Curl.js";

function App() {
  return (
    <div className="App">
      <Bench />
      <br />
      <Squat />
      <br />
      <Curl />
      <br />
    </div>
  );
}

export default App;
