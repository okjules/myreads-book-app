import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

const Shelf = props => {
  const { books, name, onSwitchShelf } = props

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onSwitchShelf={(book, shelf) => onSwitchShelf(book, shelf)} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onSwitchShelf: PropTypes.func.isRequired
}

export default Shelf
