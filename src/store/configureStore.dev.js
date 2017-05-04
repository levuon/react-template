import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../state'
import DevTools from '../containers/DevTools/DevTools'
import wef from '../lib/wrap-es6-functions'

wef()

export default function configureStore ( preloadedState ) {
  const store = createStore(
   rootReducer,
   preloadedState,
   compose(
    applyMiddleware( thunk ),
    DevTools.instrument()
   )
  )

  if ( module.hot ) {
    module.hot.accept( '../state', () => {
      const nextRootReducer = require( '../state' )

      store.replaceReducer( nextRootReducer )
    } )
  }

  return store
}
