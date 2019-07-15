import React from 'react';

const BookList = ({books}) => {
  const booksList = books.map(({id, title, authorId, publication_date}) => (
    <div key={id}>
      <h5>{title}</h5>
      <p>{authorId}</p>
      <p>{publication_date}</p>
    </div>
  ))

  return (
    <div>
      {booksList}
    </div>
  )
}

export default BookList;