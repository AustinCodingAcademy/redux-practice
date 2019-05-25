import React from 'react';

function SearchTextBox(props) {
  return (
      <div>
        Search Users on First Name:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

export default SearchTextBox;