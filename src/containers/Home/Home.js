import React, { Component } from 'react'
import { connect, b } from 'react-redux'
import classNames from 'classnames'
import localize from '../../utils/hoc/localize'
import UsersStore from 'lib/users/store'
import UsersActions from 'lib/users/actions'
import Count from 'components/count'
import Card from 'components/card'
const {
  loadSlogan
}  = require('../../actions').default

class Home extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      users: [],
      total: 0,
      name: 'levuon'
    }
  }

  componentDidMount() {
    this.props.dispatch(loadSlogan());
  }

  render () {
    return (
     <div  onClick = {this.show} >
       <h1>{this.state.users.map( user => {
         return (
          <div key = {user.id} >{`${user.id}: ${user.name}`}</div>
         )
       } )}</h1>
       <h1>{this.props.slogan}</h1>
       {/* <Count count = {2222} /> */}
       <Card color="#FF6663"/>
     </div>
    )
  }
}



function select(store) {
  return {
    slogan: store.home.items.slogan,
  };
}

export default connect(select)(Home);
