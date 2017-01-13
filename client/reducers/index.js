
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import posts from './posts.reducer';

export default combineReducers({
  routing,
  posts,
});
