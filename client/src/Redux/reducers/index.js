import { combineReducers } from 'redux';
import auth from './auth.reducer';
import url from './url.reducer';

export default combineReducers({ auth, url });
