import { combineReducers } from 'redux'

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    
  }
  if(action.type === "DECREASE_COUNTER"){
    
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){

  }
  if(action.type === "REMOVE_USER"){
    
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

export default combineReducers({
  currentCount,
  users,
  specialText
})