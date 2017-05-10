import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../state'
import DevTools from '../containers/DevTools/DevTools'
import {persistStore, autoRehydrate} from 'redux-persist'
import wef from '../lib/wrap-es6-functions'

wef()

const isDebuggingInChrome = process.env.NODE_ENV !== 'production' && !!window.navigator.userAgent

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, compose(applyMiddleware(thunk), autoRehydrate(), DevTools.instrument()));
    persistStore(store);

    if( isDebuggingInChrome ) {
      window.store = store;
    }

    // if (module.hot) {
    //     module.hot.accept('../state', () => {
    //         const nextRootReducer = require('../state')
    //
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store
}
