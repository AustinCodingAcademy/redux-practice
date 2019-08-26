import React from 'react';

function SortUsers(props) {
  return (
    <div>
      Sort Users On:
        <select onChange={
        (e) => {
          store.dispatch({ type: "SET_CURRENT_USER_SORT", value: e.target.value })
        }
      }>
        <option value="first_name">First Name</option>
        <option value="last_name">Last Name</option>
      </select>
    </div>
  );
}
export default SortUsers;