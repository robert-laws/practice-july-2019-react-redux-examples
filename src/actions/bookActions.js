import * as bookApi from '../api/apiBooks';

export function createBooks(book) {
  return { type: 'CREATE_BOOK', book }
}

export function loadBooksSuccess(books) {
  return { type: 'LOAD_BOOKS_SUCCESS', books}
}

export function loadBooks() {
  return function(dispatch) {
    return bookApi.getBooks()
      .then(books => {
        dispatch(loadBooksSuccess(books));
      }).catch(error => {
        throw error;
      })
  }
}