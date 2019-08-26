import React from 'react';

function CounterButton(props) {
  return (
    <div>
      <button onClick={
        () => {
          store.dispatch({ type: "INCREMENT" })
        }
      }>Increase Counter By One</button>
      <button onClick={
        () => {
          store.dispatch({ type: "DECREMENT" })

        }
      }>Decrease Counter By One</button>
    </div>
  );
}
export default CounterButton;