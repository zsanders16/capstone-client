import { combineReducers } from 'redux';
import navbar from './navbar';
import favorites from './favorites'

const rootReducer = combineReducers({
  navbar,
  favorites,
})

export default rootReducer;
