import React from 'react';
import store from "../store";

function SearchTextBox(props) {
  return (
      <div>
        Search Users on First Name:
        <input onChange={(e)=>{
           store.dispatch({type: "SET_SEARCH_TEXT", value: e.target.value})
        }} />
      </div>
  );
}

export default SearchTextBox;