import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  state = { books: [] }

  updateQuery(query) {
    const maxResults = 20;

    if (query.length < 3) {
      return;
    }

    BooksAPI.search(query, maxResults)
      .then(books => {
        books.length > 0 && books.forEach((book) => {
          BooksAPI.get(book.id).then((returnedBook) => {
            book.shelf = returnedBook.shelf;
            this.setState({ books });
          });
        });
      });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.length > 0 && books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onSwitchShelf={(book, shelf) => this.props.onSwitchShelf(book, shelf)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookSearch
