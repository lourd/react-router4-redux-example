import { createStore, applyMiddleware, compose } from 'redux'

import {
  syncHistoryWithStore,
  routerMiddleware as createRouterMiddleware,
  push, replace, go, goBack, goForward,
} from './react-router-redux/'

import rootReducer, { history } from './reducer'

const routerMiddleware = createRouterMiddleware(history)

// Enhance createStore with middlewares. Order matters here
const enhancedCreateStore = compose(
  applyMiddleware(routerMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
)(createStore)

// Create the store
const store = enhancedCreateStore(rootReducer)

syncHistoryWithStore(history, store)

// Expose these globally for dev purposes
window.dispatch = store.dispatch
window.h = history
window.push = push
window.replace = replace
window.go = go
window.goBack = goBack
window.goForward = goForward

export default store
