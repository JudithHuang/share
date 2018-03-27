import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';

const store = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger)
)(createStore)(reducers);

export default store;
