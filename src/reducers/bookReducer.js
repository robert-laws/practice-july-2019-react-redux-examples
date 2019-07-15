export default function bookReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_BOOK':
      return [...state, { ...action.book }];
    case 'LOAD_BOOKS_SUCCESS':
      return action.books;
    default:
      return state
  }
}