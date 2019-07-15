import React from 'react';

const BookList = ({books}) => {
  const booksList = books.map(({id, title, authorName, publication_date}) => (
    <div className="col s3">
      <div key={id} className="card-panel teal">
        <p className="white-text">
          <strong>
            {title}
          </strong>
        </p>
        <p className="white-text">{authorName}</p>
        <p className="white-text">{publication_date}</p>
      </div>
    </div>
  ))

  return (
    <>
      {booksList}
    </>
  )
}

export default BookList;