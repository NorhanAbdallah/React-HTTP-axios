import React, { Component } from 'react';


class ViewUser extends Component{
    render(){
        return(
<div>
  <div>name: {this.props.user.name}</div>
  <div>email: {this.props.user.email}</div>
  </div>
        );
    }
}
export default ViewUser;