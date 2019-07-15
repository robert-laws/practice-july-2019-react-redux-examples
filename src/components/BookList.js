import React from 'react';

const BookList = ({books, authors}) => {
  const booksList = books.map(book => (
    <div key={book.id} className="card-panel teal">
      <p className="white-text">
        <strong>
          {book.title}
        </strong>
      </p>
      <p className="white-text">{book.authorName}</p>
      <p className="white-text">{book.publication_date}</p>
    </div>
  ))

  return (
    <div className="row">
      <div className="col s12">
        {booksList}
      </div>
    </div>
  )
}

export default BookList;