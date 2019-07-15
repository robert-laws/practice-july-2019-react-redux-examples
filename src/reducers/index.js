import { combineReducers } from 'redux';
import books from './bookReducer';
import authors from './authorReducer';
import events from './eventReducer';

export default combineReducers({
  books,
  authors,
  events
})