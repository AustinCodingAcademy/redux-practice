import React from 'react';

function UserButtons(props) {
  return (
    <div>
      <button onClick={
        () => {
          let user = {
            "id": 1,
            "name": "george bluth",
            "address": "4116 Magnolia Drive, Portland, ME 04103",
            "phone": 15551234567,
            "occupation": "father",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
          };

        }
      }>Add User</button>
      <button onClick={
        () => {
          store.dispatch({ type: "REMOVE_USER" })
        }
      }>Remove User</button>
    </div>
  );
}
export default UserButtons;
