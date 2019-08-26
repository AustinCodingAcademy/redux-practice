import React from "react";
import CounterButton from "./components/CounterButton";
import SpecialTextBox from "./components/SpecialTextBox";
import Counter from "./components/Counter";
import SpecialText from "./components/SpecialText";
import UserButtons from "./components/UserButtons";
import Thermostat from "./components/Thermostat";
import Users from "./components/Users";
import ChangeTemperature from "./components/ChangeTemperature";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCity from "./components/CurrentCity";
import CityDropDown from "./components/CityDropDown";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

function App() {
  //need to change this to a class to put the fetch here
  //componentdidMount and put the fetch in it

  // fetch().then().then(()=>{
  //dispatch store.dispatch({type: "USERS_LOADED", value: data})
  //add a new reducer to call this action
  // })
  return (
    <div className="App">
      <div className="container">
        <CounterButton />
        <br />
        <SpecialTextBox />
        <br />
        <UserButtons />
        <br />
        <CityDropDown />
        <br />
        <ChangeTemperature />
        <br />
        <SearchTextBox />
        <br />
        <VideoTextBox />
        <br />
        <SortUsers />
        <br />
        <ScaleVideo />
        <br />
        <ShowModal />
      </div>
      <div className="container">
        <Counter />
        <br />
        <SpecialText />
        <br />
        <CurrentCity />
        <br />
        <Thermostat />
        <br />
        <VideoPlayer />
        <br />
      </div>
      <div className="container">
        <Users />
      </div>
      <Modal />
    </div>
  );
}
export default App;
