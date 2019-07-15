import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import { loadAuthors } from '../actions/authorActions';
import BookList from '../components/BookList';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.loadBooks()
    this.props.loadAuthors()
  }

  render() {
    return (
      <>
        <div className="row">
          <BookList books={this.props.books} authors={this.props.authors} />
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return { 
    books: state.authors.length === 0 ? [] : state.books.map(book => {
      return {
        ...book,
        authorName: state.authors.find(author => author.id === book.authorId).name
      }
    }),
    authors: state.authors
  }
}

export default connect(mapStateToProps, { loadBooks, loadAuthors })(BooksContainer);