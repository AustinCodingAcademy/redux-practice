import React from 'react';

function SearchTextBox(props) {
  return (
    <div>
      Search Users on First Name:
        <input onChange={(e) => {
        StorageEvent.dispatch({ type: "SET_SEARCH_TEXT", value: e.target.value })
      }} />
    </div>
  );
}

export default SearchTextBox;