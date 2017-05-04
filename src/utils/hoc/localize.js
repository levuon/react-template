import React, { Component } from 'react'
import { assign } from 'lodash'


const tool = {
  show: () => console.log( 'show!' ),
  hide: () => console.log( 'hide!' )
}

const localize = ( tool ) => {
  let toolProps = {
    show: tool.show,
    hide: tool.hide
  }
  return ( ComposedComponent ) => {
    let componentName = ComposedComponent.displayName || ComposedComponent.name || '';

    return class EnhanceEcomponent extends Component {

      render () {
        let props = assign( {}, this.props, toolProps );
        return (
         <ComposedComponent {...props} />
        )
      }
    }
  }
}

export default localize( tool );
