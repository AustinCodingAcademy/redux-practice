import React from 'react';
import store from "../store";

class Users extends React.Component {
 
  state={
    users:[],
    sortOn:"",
    firstNameFilter:""
  }

  componentDidMount(){
    let users = store.getState().users;
    this.setState({users:users})
    store.subscribe(()=>{
      let users = store.getState().users
      let searchText = store.getState().searchText
      let currentUserSort = store.getState().currentUserSort
      this.setState({users:users, sortOn:currentUserSort, firstNameFilter:searchText})
    })
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