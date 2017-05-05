import React, { Component } from 'react'
import classNames from 'classnames'
import localize from '../../utils/hoc/localize'
import UsersStore from 'lib/users/store'
import UsersActions from 'lib/users/actions'
import Count from 'components/count'
import fetch from 'node-fetch'

class Home extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      users: [],
      total: 0,
      name: 'levuon'
    }
    this.show = this.show.bind( this )
    this._updateSiteUsers = this._updateSiteUsers.bind( this )
  }

  async componentWillMount () {
    // UsersStore.on( 'change', this._updateSiteUsers );
    // UsersActions.fetchUsers();
    const  url = `https://api.github.com/users/${this.state.name}`;
    const response = await fetch( url );
    console.log(response)
  }

  _getState () {
    var fetchingUsers;
    fetchingUsers = UsersStore.getUsers();

    return Object.assign( {}, {
      users: fetchingUsers.users,
      total: fetchingUsers.total
    } );
  }

  _updateSiteUsers () {
    this.setState( this._getState() )
  }

  show () {
    const { show } = this.props;
    show();
  }

  render () {

    const classes = classNames( this.props.className, {
      'is-loading': !this.props.post || !this.props.connections
    } );
    return (
     <div onClick = {this.show} >
       <h1>{this.state.users.map( user => {
         return (
          <div key = {user.id} >{`${user.id}: ${user.name}`}</div>
         )
       } )}</h1>
       <h1>{this.state.total}</h1>
       <Count count = {2222} />
     </div>
    )
  }
}

export default localize( Home )
