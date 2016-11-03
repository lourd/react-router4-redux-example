import syncHistoryWithStore from './sync'
import { LOCATION_CHANGE, createReducer } from './reducer'

import {
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routerActions,
} from './actions'
import routerMiddleware from './middleware'

export {
  syncHistoryWithStore,
  LOCATION_CHANGE, createReducer,
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routerActions,
  routerMiddleware,
}
