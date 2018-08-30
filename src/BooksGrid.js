import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

// Applying Stateless Functional Components
function BooksGrid (props) {
  return (
    <ol className='books-grid'>
      {
        props.booksGrid.map(book => {
          return <Book book={book} key={book.id} onChangeShelf={props.onChangeShelf} />
        })
      }
    </ol>
  )
}

BooksGrid.propTypes = {
  booksGrid: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BooksGrid
