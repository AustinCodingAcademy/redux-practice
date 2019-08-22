import React from 'react';
import store from '../store';

function ShowModal(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            store.dispatch({type: "SET_IS_LOADING", value: true})
          }
        }>Show Modal</button>

      </div>
  );
}
export default ShowModal;