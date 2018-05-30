import { createStore, combineReducers, applyMiddleware } from 'redux';

import promise from 'redux-promise-middleware';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import taskOneReducer from './reducers/TaskOne/taskOneReducer';
import taskTwoReducer from './reducers/TaskTwo/taskTwoReducer';

const middleware = applyMiddleware(
    promise(),
    thunk,
    createLogger()
);

export default createStore(
    combineReducers({
        taskOneReducer,
        taskTwoReducer,        
  	}),
    {},
    middleware
);
