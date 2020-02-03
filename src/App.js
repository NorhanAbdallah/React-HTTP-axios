import React, { Component } from 'react';
import {getUsers, deleteUser, editUser, addUser} from './API/Users'
import ViewUser from './components/viewUser'
import {UserForm} from './components/UsersForm'
class App extends Component {

  state = {
    users: [],
    user: {}
  }

 componentDidMount() {
      getUsers().then(response => {
        this.setState({
          users: response.data
        });
      } )
      .catch(error => {
        alert('errroooorrr ruuun')
      });
 }


// **************** SET USER
setActive = (user) => {
  this.setState({'user': user} )
};

// **************** DELETE USER

deleteUser = (user) => {
 //delete from server 
 deleteUser(user.id)
 .then(() => {
 //delete from state
 let users = this.state.users;
 const index = users.indexOf(user);
 users.splice(index, 1) ; 
 this.setState({users});
 } )
 .catch(error => {
  alert('errroooorrr ruuun')
})
};


// ***************** UPDATE USER
editUser = (values) => {
  const id = this.state.user.id;
editUser(id, values).then (()=> 
{
  alert('dont run');
});
}


// **************** ADD NEW USER 
addUser = (values) => {
  addUser(values).then(() => {
    alert('Dont Run');
  })
  .catch(error => {
    alert('RUNN')
  });

}

  render(){
  return (
    <div className="App">
     <ul>
  {this.state.users.map(user =>  <li> {user.name}
  <button onClick= {() => this.setActive(user) }> View</button>
  <button onClick= {() => this.deleteUser(user) }>Delete</button>
  </li>)}
      
     </ul>

     <div>
       <h3>user details</h3>
       {this.state.user.id > 0 ? <ViewUser user={this.state.user}/>: 'enter stg'}
     </div>

     <div>
       <h3>Edit user </h3>
       {this.state.user.id > 0 ? <UserForm 
       values={this.state.user}
       onSubmit = {this.editUser} />: 'enter stg'}
     </div>

     <div>
       <h3>Add user </h3>
       {this.state.user.id > 0 ? <UserForm 
       values={{
         name: '', 
         email:''
       }}

       onSubmit = {this.addUser} />: 'enter stg'}
     </div>

    </div>
  );
}
}
export default App;
