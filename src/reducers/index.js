import { combineReducers } from 'redux';
import navbar from './navbar';
import locations from './locations'

const rootReducer = combineReducers({
  navbar,
  locations,
})

export default rootReducer;
