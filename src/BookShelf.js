import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

// Applying Stateless Functional Components
function BookShelf (props) {
  return (
    <div className='list-books-content'>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{props.shelf}</h2>
        <div className='bookshelf-books'>
          <BooksGrid booksGrid={props.books} onChangeShelf={props.onChangeShelf} />
        </div>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  shelves: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BookShelf
