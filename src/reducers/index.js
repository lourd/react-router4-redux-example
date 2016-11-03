import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { createReducer } from 'lib/react-router-redux/'


export const history = createBrowserHistory()
// exposing globally for dev purposes
window.h = history

const routerReducer = createReducer(history)

/**
 * Reducers
 */

const reducer = combineReducers({
  routing: routerReducer,
})

export default reducer

