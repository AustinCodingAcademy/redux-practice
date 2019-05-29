import React from 'react';
import store from '../store';

function SpecialTextBox(props) {
  return (
      <div>
        Enter Special Text:
        <input onChange={(e)=>{
          let value = e.target.value;
          let message = {
            type: 'SET_SPECIAL_TEXT',
            value: value
          }
          store.dispatch(message);
        }} />
      </div>
  );
}

export default (SpecialTextBox);
