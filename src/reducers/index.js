import { combineReducers } from 'redux';
import stickys from './stickys';
import nextId from './nextId';
import filter from './filter'

const rootReducer = combineReducers({
  stickys,
  nextId,
  filter
});

export default rootReducer;