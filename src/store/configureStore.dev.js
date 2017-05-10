import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../state'
import DevTools from '../containers/DevTools/DevTools'
import {persistStore, autoRehydrate} from 'redux-persist'
import localForage from 'localForage'

const isDebuggingInChrome = process.env.NODE_ENV !== 'production' && !!window.navigator.userAgent

export default function configureStore(preloadedState) {

    const store = createStore(
      rootReducer,
      preloadedState,
      compose(
        applyMiddleware(thunk),
        // 状态持久化
        autoRehydrate(),
        DevTools.instrument()
      )
    );
    persistStore(store, {storage: localForage});

    if( isDebuggingInChrome ) {
      window.store = store;
    }

    // if (module.hot) {
    //     module.hot.accept('../state', () => {
    //         const nextRootReducer = require('../state')
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store
}
