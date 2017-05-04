import React from "react";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const routes = (
 <Router history = {hashHistory} >
   <Route path = "/"
          component = {require( './containers/Root/Root' ).default} >
     <IndexRoute
      getComponent = { ( nextState, callback ) => {
        require.ensure( [], require => {
          callback( null, require( './containers/Home/Home' ).default )
        }, 'home' )
      } } />

     {/* <Route path="add"
      onEnter={ requireParam }
      getComponent={ (nextState, callback) => {
      require.ensure([], require => {
      callback(null, require('./containers/AddGood/ChooseCategory').default)
      },'goods/line/js/category')
      }}/> */}

   </Route>
 </Router>
);

export default routes
