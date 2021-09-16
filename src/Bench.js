import React, { useState } from "react";
import * as VFX from "react-vfx";
import "./Bench.css";

function Bench(props) {
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
    <div>
      <div className="title">
        <VFX.VFXProvider>
          <VFX.VFXSpan shader="rgbShift">WHATS UP BUFFNESS?</VFX.VFXSpan>
        </VFX.VFXProvider>
        <p>On a scale of 1-10 how did you do at the gym today? </p>
        <p>BE HONEST...</p>
        <VFX.VFXProvider>
          <VFX.VFXSpan class="go" shader="blink">
            Did you even go?
          </VFX.VFXSpan>
        </VFX.VFXProvider>
      </div>
      <div className="bench">
        {" "}
        <p>BENCH PRESS</p>
        <p>You are this Yoked: {state.buffPoints}</p>
        <button onClick={increaseBuff}>+1 on my Buffness</button>
        <button onClick={decreaseBuff}>Didnt go = Weak Sauce</button>
      </div>
    </div>
  );
}

export default Bench;
