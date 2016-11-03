import { combineReducers } from 'redux'
import createBrowserHistory from 'history/createBrowserHistory'

import { createReducer } from './react-router-redux/'

export const history = createBrowserHistory({ basename : '/react-router4-redux-example' })

export default combineReducers({
  routing: createReducer(history),
})
