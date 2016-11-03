# [React Router v4](https://react-router.now.sh) w/ [React Router Redux](https://github.com/reactjs/react-router-redux) Demo
An example for illustrating a possible technical direction for integrating [Redux](http://redux.js.org) & React Router v4.

## Differences
The modified version of `react-router-redux` is in `src/lib/`. The difference is in `middleware.js`. Here it exports a factory function `createReducer` that takes `history`. See [here](https://github.com/reactjs/react-router-redux/issues/454#issuecomment-258197584) for more explanation.

## Dev Instrumentation
I've instrumented the app with a few handy hooks for playing with the app state:

- `dispatch` - the store's dispatch is available globally as `dispatch`
- `history` - the history instance is available globally as `h`
- Redux Dev Tools - the store is instrumented to [dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) so you can play around with time travel debugging
