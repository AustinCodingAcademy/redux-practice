# Make sure to do one thing at a time, save and refresh to check for errors
### Setup
Fork, clone, npm i, npm start

### Intro
This is a pre made create-react-app project. View this video to see how the app should work once you are done coding. [Video](https://youtu.be/R8VFic_ZZUc). This project is for us to practice using redux to control data that is changed through user interactions. On the left hand side of the page is a collection of different inputs that are available on a web page. When the user interacts with the input it will change some data that should update the right hand side of the page. 

### Store
  * In store.js we are creating the store and exporting it for anyone to use.
  * Import store into any component that needs it.

###  Reducers
  * Create Reducers in reducers/index.js
  * Look at state.js and create a reducer for each piece of state
  * Remember reducers take 2 parameters: `state`, and `action`
  * Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object
  * Remember to return state by default
  * You will need to decide which reducer cares about which action message type
  * Combine reducers and export

### Make these reducers
  * currentCount
    * if "INCREASE_COUNTER" it should return the current count plus
    * if "DECREASE_COUNTER" it should return the current count minus one
  * specialText
    * if "SET_SPECIAL_TEXT" should return the action value
  * currentCity
    * if "SET_CURRENT_CITY" should return the action value
  * users
    * if "REMOVE_USER" OR "ADD_USER" should return slice(1) to remove the first user or [...state,action.value] to add a user
  * currentTemp
    * if "SET_TEMP" should return action value
  * isLoading
    * if "SET_IS_LOADING" should return action value  
  * videoURL
    * if "SET_VIDEO_URL" should return action value
  * searchText
    * if "SET_SEARCH_TEXT" should return action value
  * currentUserSort
    * if "SET_CURRENT_USER_SORT" should return action value
  * videoScale
    * if "SET_VIDEO_SCALE" should return action value


### These components should subscribe to the store because they are showing data and they care about when it changes. Add the componentDidMount lifecycle method and subscribe to the store. 
  * SpecialText.js
    * setState for `text` to the store state `specialText`
  * Users.js
    * setState for `users` to the store state `users`
    * setState for `firstNameFilter` to the store state `searchText`
    * setState for `sortOn` to the store state `currentUserSort`
  * Counter.js
    * setState for `count` to the store state `currentCount`
  * CurrentCity.js
    * setState for `text` to the store state `currentCity`
  * Thermostat.js
    * setState for `temp` to the store state `currentTemp`
  * VideoPlayer.js
    * setState for `URL` to the store state `videoURL`
    * setState for `scale` to the store state `videoScale`
  * Modal.js
    * setState for `isLoading` to the store state `isLoading`

### These components care about changing data. Call the store dispatch function where appropriate. Send in the appropriate action message.
  * SpecialTextBox.js
    * dispatch a message with type `SET_SPECIAL_TEXT` and value = e.target.value, in the onChange of the textbox
  * UserButtons.js
    * dispatch a message with type `ADD_USER` vand value = user, in the onClick of the Add button
    * dispatch a message with type `REMOVE_USER` in the onClick of the Remove button
  * CityDropDown.js
   * dispatch a message with type `SET_CURRENT_CITY` and value = e.target.value, in the onChange of the select
  * CounterButton.js
    * dispatch a message with type `INCREASE_COUNTER` in the onClick of the Increase button
    * dispatch a message with type `DECREASE_COUNT` in the onClick of the Decrease button
  * SearchTextBox.js
    * dispatch a message with type `SET_SEARCH_TEXT` and value = e.target.value,  in the onChange of the textbox
  * ChangeTemperature.js
    * dispatch a message with type `SET_TEMP` and value = e.target.value, in the onChange of the input
  * VideoTextBox.js
    * dispatch a message with type `SET_VIDEO_URL` and value = e.target.value, in the onChange of the input
  * SortUsers.js
    * dispatch a message with type `SET_CURRENT_USER_SORT` and value = e.target.value, in the onChange of the select
  * ScaleVideo.js
    * dispatch a message with type `SET_VIDEO_SCALE` and value = e.target.value, in the onChange of the input
  * ShowModal.js
    * dispatch a message with type `SET_IS_LOADING` and value = true in the onClick of the button
  * Modal.js
    * dispatch a message with type `SET_IS_LOADING` and value = false in the onClick of the button



### Bonus - fetch
Currently, the users are hard coded in the state.js file. How could we change this so that the data is coming from an api. https://jsonplaceholder.typicode.com/users
There is no new special thing we have to do. We have all the knowledge we need to do this with redux. We just need to figure out how to use them together.
* We should know how to make a fetch call by now. Where does the fetch call go? 
* What do you do with the data when the fetch call is complete? Not setState.
* Is there an action message that could represent that the redux store needs to be updated with the list of users you just fetched from the api.
* Does any reducer need to be aware of this message?


