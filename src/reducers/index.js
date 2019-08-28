import { combineReducers } from 'redux'

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state, action.value]
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1)
  }
  if(action.type === "LOAD_USERS"){
    return action.value;
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = "", action) {
  if(action.type === "SET_CURRENT_CITY") {
    return action.value
  }
  return state;
}

function searchText(state = "", action) {
  if(action.type === "SET_SEARCH_TEXT") {
    return action.value
  }
  return state;
}

function currentTemp(state = 0, action) {
  if(action.type === "SET_TEMP") {
    return action.value
  }
  return state;
}

function isLoading(state = false , action) {
  if(action.type === "SET_IS_LOADING") {
    return action.value
  }
  return state;
}

function videoURL(state = "", action) {
  if(action.type === "SET_VIDEO_URL") {
    return action.value
  }
  return state;
}

function currentUserSort(state = "", action) {
  if(action.type === "SET_CURRENT_USER_SORT") {
    return action.value
  }
  return state;
}

function videoScale(state = 1, action) {
  if(action.type === "SET_VIDEO_SCALE") {
    return action.value
  }
  return state;
}

export default combineReducers({
  currentCount,
  users,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale
})