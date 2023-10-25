import { createStore } from 'redux';
import userReducer from './Reducer/user.reducer';

const storage = createStore(userReducer);

export default storage;