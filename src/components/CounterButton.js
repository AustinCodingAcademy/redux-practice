import React from 'react';
import store from '../store';

function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            let message = {
              type: 'INCREASE_COUNTER'
            };
            store.dispatch(message);
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            let message = {
              type: 'DECREASE_COUNTER'
            }
            store.dispatch(message);
          }
        }>Decrease Counter By One</button>
      </div>
  );
}
export default CounterButton;