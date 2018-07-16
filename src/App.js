import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import './App.css';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBook(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(previousState => ({
        books: previousState.books.filter(b=> b.id !== book.id).concat([book])
      }))
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookShelf
            books={this.state.books}
            changeBook={(book, shelf) => this.changeBook(book, shelf)}
          />
        )}
        />
        <Route path="/search" render={() => (
          <BookSearch
            onSwitchShelf={(book, shelf) => this.changeBook(book, shelf)}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp;
