import { createStore, applyMiddleware } from 'redux';
import userReducer from './Reducer/user.reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const storage = createStore(userReducer, applyMiddleware(thunk));

export default storage;