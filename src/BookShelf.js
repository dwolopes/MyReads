import React, {Component} from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
  render () {
    return (
        <div className='list-books-content'>
            <div className='bookshelf'>
                <h2 className='bookshelf-title'>{this.props.shelf}</h2>
                <div className='bookshelf-books'>
                    <BooksGrid booksGrid={this.props.books} onChangeShelf={this.props.onChangeShelf}/>
                </div>
            </div>
      </div>
    )
  }
}

export default BookShelf
