import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeBook: PropTypes.func.isRequired
  }

  booksOnShelf(shelf) {
    const { books } = this.props;
    return books.filter(book => book.shelf === shelf)
  }

  onSwitchShelf(book, shelf) {
    this.props.changeBook(book, shelf)
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              name="Currently Reading"
              books={this.booksOnShelf("currentlyReading")}
              onSwitchShelf={(book, shelf) => this.onSwitchShelf(book, shelf)}
            />
            <Shelf
              name="Want to Read"
              books={this.booksOnShelf("wantToRead")}
              onSwitchShelf={(book, shelf) => this.onSwitchShelf(book, shelf)}
            />
            <Shelf
              name="Read"
              books={this.booksOnShelf("read")}
              onSwitchShelf={(book, shelf) => this.onSwitchShelf(book, shelf)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BookShelf
