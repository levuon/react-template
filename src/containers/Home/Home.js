import React, { Component } from 'react'
import classNames from 'classnames'
import localize from '../../utils/hoc/localize'
import UsersStore from 'lib/users/store'
import UsersActions from 'lib/users/actions'
import fetch from 'node-fetch'

class Home extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      users: [],
      total: 0,
      name: 'levuon'
    }
  }

  _getState () {
    var fetchingUsers;
    fetchingUsers = UsersStore.getUsers();

    return Object.assign( {}, {
      users: fetchingUsers.users,
      total: fetchingUsers.total
    } );
  }

  render () {
    const classes = classNames( this.props.className, {
    } );
    return (
     <div onClick = {this.show} >
       <h1>{this.state.users.map( user => {
         return (
          <div key = {user.id} >{`${user.id}: ${user.name}`}</div>
         )
       } )}</h1>
       <h1>{this.state.total}</h1>
     </div>
    )
  }
}

export default localize( Home )
