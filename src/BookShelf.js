import React from 'react'
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

export default BookShelf
