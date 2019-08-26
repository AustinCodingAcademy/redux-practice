import React from "react";
import store from "../store";

function UserButtons(props) {
  return (
    <div>
      <button
        onClick={() => {
          let user = {
            id: 1,
            name: "george bluth",
            address: "4116 Magnolia Drive, Portland, ME 04103",
            phone: 15551234567,
            occupation: "father",
            avatar:
              "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
          };
          store.dispatch({ type: "ADD_USER", value: user });
        }}
      >
        Add User
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "REMOVE_USER", value: [] });
        }}
      >
        Remove User
      </button>
    </div>
  );
}
export default UserButtons;
