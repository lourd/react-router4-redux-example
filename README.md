# [React Router v4](https://react-router.now.sh) w/ [React Router Redux](https://github.com/reactjs/react-router-redux) Demo
An example for illustrating a possible technical direction for integrating [Redux](http://redux.js.org) & React Router v4.

## Differences
The modified version of `react-router-redux` is in `src/react-router-redux/`. The differences are in `reducer.js` and `sync.js`.

### reducer.js
`reducer.js` exports a factory function `createReducer` that takes `history`. The reducer needs access to the `history` instance so it can set its initial state properly.

### sync.js
Syncing the store with the history is now much simpler thanks to a one-way flow of state. It has an order of magnitude less code (~10 lines vs ~100 lines), and there's no more internal state. We simply subscribe to the history and dispatch an action to the store with the given `location` and `action`.

## Dev Instrumentation
I've instrumented the app with a few handy hooks for playing with the app state:

- `dispatch` - the store's dispatch is available globally as `dispatch`
- Router redux actions - the router redux action creators (`push`, `replace`, `go`, `goBack`, & `goForward`) are available globally. Try something like `dispatch(push('/bar'))` or `dispatch(goBack())`.
- `history` - the history instance is available globally as `h`. Try something like `h.push('/foo')`.
- Redux Dev Tools - the store is instrumented to [dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) so you can play around with time travel debugging
