import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadBooks } from '../actions/bookActions';
import BookList from '../components/BookList';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.loadBooks()
  }

  render() {
    return (
      <div>
        <BookList books={this.props.books} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { books: state.books }
}

export default connect(mapStateToProps, { loadBooks })(BooksContainer);