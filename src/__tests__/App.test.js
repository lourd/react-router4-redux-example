import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from '../App'
import store from '../store'

it('renders without crashing', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.createElement('div')
  )
})
