import { combineReducers } from 'redux';
import books from './bookReducer';
import authors from './authorReducer';

export default combineReducers({
  books,
  authors
})