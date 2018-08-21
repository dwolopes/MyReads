import React, {Component} from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
            console.log(books)
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookShelf/>
                <BookShelf/>
                <BookShelf/>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BooksList