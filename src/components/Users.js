import React from 'react';

class Users extends React.Component {
 
  state={
    users:[],
    sortOn:"",
    firstNameFilter:""
  }

  render() {
    let {users,sortOn,firstNameFilter} = this.state;
    var usersDivs = null;
    if(users){
      var sorted = users.sort((a,b) => {
        return a[sortOn] > b[sortOn];
      });
      usersDivs = sorted.filter(function(u){
        return !firstNameFilter || 
        (firstNameFilter && 
        u.name.indexOf(firstNameFilter) > -1);
      })
      usersDivs = usersDivs.map(function(u){
        return <div>{u.name}</div>
      })
    }
    return (
        <div>
          <h1>Users</h1>
         {usersDivs}
        </div>
    );
  }
}

export default Users;