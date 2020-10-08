import { combineReducers } from 'redux';
import auth from './auth.reducer';
import url from './url.reducer';
import dashboard from './dashboard.reducer';

export default combineReducers({ auth, url, dashboard });
