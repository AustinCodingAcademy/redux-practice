import React from 'react';
import store from '../store';
import state from '../state';

function ShowModal(props) {

  return (
      <div>
        <button onClick={
          ()=>{
            let message = {
              type: 'SET_IS_LOADING',
              value: true
            }
            store.dispatch(message);  
          }
        }>Show Modal</button>

      </div>
  );
}
export default ShowModal;