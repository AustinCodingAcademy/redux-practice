import React from "react";
import store from "../store";

function ChangeTemperature(props){
    return(
      <div>
        <br/>
        <label>Change Temp -  Enter a value from 1-100<br/>
          <input onChange={(e)=>{
           store.dispatch({type:"SET_TEMP", value: e.target.value})
          }} type="number" min="0" max="100" />
        </label>
      </div>
    )
}

export default ChangeTemperature;