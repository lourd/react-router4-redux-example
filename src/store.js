import { createStore, applyMiddleware, compose } from 'redux'

import {
  syncHistoryWithStore,
  routerMiddleware as createRouterMiddleware,
} from 'lib/react-router-redux/'

import rootReducer, { history } from './reducers/'

const routerMiddleware = createRouterMiddleware(history)

/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */

// Enhance createStore with middlewares. Order matters here
const enhancedCreateStore = compose(
  applyMiddleware(routerMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
)(createStore)

// Create the store
const store = enhancedCreateStore(rootReducer)

// Expose dispatch globally for dev purposes
window.dispatch = store.dispatch

syncHistoryWithStore(history, store)

export default store
