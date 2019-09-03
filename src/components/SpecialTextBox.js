import React from 'react';
import store from '../store'


function SpecialTextBox(props) {
  return (
      <div>
        Enter Special Text:
        <input onChange={(e)=>{
          store.dispatch({type:"SET_SPECIAL_TEXT", value: e.target.value})
        }} />
      </div>
  );
}

export default (SpecialTextBox);
