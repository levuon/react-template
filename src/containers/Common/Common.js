import React, { Children, Component, cloneElement } from 'react'

export default class Common extends Component {
  constructor () {
    super()
  }

  render () {
    return (
     <div>
       {this.props.children}
     </div>
    )
  }
}
