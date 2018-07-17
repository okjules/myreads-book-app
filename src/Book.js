import React from 'react'
import PropTypes from 'prop-types'

const DEFAULT_BOOK_COVER = 'http://lgimages.s3.amazonaws.com/gc-md.gif';

const Book = props => {
  const { book, onSwitchShelf } = props;

  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : DEFAULT_BOOK_COVER;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf || 'none'} onChange={(e) => onSwitchShelf(book, e.target.value)}>
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && (
        <div className="book-authors">
          {book.authors.map(author => (
            <span key={author}>{author}<br/></span>
          ))}
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onSwitchShelf: PropTypes.func.isRequired
};

export default Book
