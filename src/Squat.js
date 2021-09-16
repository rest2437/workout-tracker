import React, { useState } from "react";
import "./Squat.css";

function Squat(props) {
  const [state, setState] = useState({ buffPoints: 1 });
  function increaseBuff() {
    const newBuffPoints = state.buffPoints >= 10 ? 0 : state.buffPoints + 1;
    setState({ buffPoints: newBuffPoints });
  }

  function decreaseBuff() {
    const newBuffPoints = state.buffPoints <= 0 ? 10 : state.buffPoints - 1;
    setState({ buffPoints: newBuffPoints });
  }

  return (
    <div className="squat">
      <p>Squat that ass to the grass mmmmmmkay</p>
      <p>Your Butt Cheeks are this yoked: {state.buffPoints}</p>
      <button onClick={increaseBuff}>+1 on my Buffness</button>
      <button onClick={decreaseBuff}>Didnt go = Weak Sauce</button>
    </div>
  );
}

export default Squat;
