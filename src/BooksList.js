import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BooksList extends Component {

    state = {
        shelves: [
            {
              name: 'wantToRead',
              title: 'Want to read'
            },
            {
              name: 'currentlyReading',
              title: 'Currently reading'
            },
            {
              name: 'read',
              title: 'Read'
            }
          ]
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {
                    // Based on the the existing shelves: sort the books among these shelves and create a bookshelf
                    // element for those books which are in that shelf element
                    this.state.shelves.map(shelf => {
                        return <BookShelf shelves={this.state.shelves} shelf={shelf.title} key={shelf.name}
                            books={this.props.books.filter( book => (book.shelf === shelf.name))}
                            onChangeShelf={this.props.onChangeShelf} />
                    })
                }
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

BooksList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BooksList