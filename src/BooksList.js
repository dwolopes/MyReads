import React, {Component} from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {

    state = {
        books: [],
        shelves: [
            {
              name: 'none',
              title: 'none'
            },
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

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                {
                    this.state.shelves.map(shelf => {
                        return <BookShelf shelves={this.state.shelves} shelf={shelf.title} key={shelf.name}
                            books={this.state.books.filter( book => (book.shelf === shelf.name))
                        }/>
                    })
                }
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BooksList