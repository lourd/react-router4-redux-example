import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { createReducer } from 'lib/react-router-redux/'


export const history = createBrowserHistory({ basename : '/react-router4-redux-example' })
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

