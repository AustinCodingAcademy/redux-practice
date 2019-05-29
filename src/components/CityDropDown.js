import React from 'react';
import store from '../store';

function CityDropDown(props) {
  return (
      <div>
        CurrentCity: 
        <select onChange={
          (e)=>{
            let value = e.target.value;
            let message = {
              type: 'SET_CURRENT_CITY',
              value: value
            }
            store.dispatch(message)
          }
        }>
          <option value="Austin">Austin</option>
          <option value="New York">New York</option>
          <option value="New Olreans">New Olreans</option>
          <option value="Las Vegas">Las Vegas</option>
          <option value="Seattle">Seattle</option>
          <option value="San Fransisco">San Fransisco</option>
          <option value="Washington D.C.">Washington D.C.</option>
        </select>
      </div>
  );
}
export default CityDropDown;