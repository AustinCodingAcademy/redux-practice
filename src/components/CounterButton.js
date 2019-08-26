import React from "react";
import store from "../store";
function CounterButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          store.dispatch({ type: "INCREASE_COUNTER" });
        }}
      >
        Increase Counter By One
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "DECREASE_COUNTER" });
        }}
      >
        Decrease Counter By One
      </button>
    </div>
  );
}
export default CounterButton;
