import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class SearchBooks extends Component{

  state = {
    books: [],
    searchedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
  }

  updateQuery = (query) => {
    let searchTerm = query.trim();
    if(searchTerm.length > 0){
      BooksAPI.search(searchTerm).then((searchedBooks) => {
          if('error' in searchedBooks){
            this.setState({searchedBooks: searchedBooks.items})
          }else {
            this.setState({searchedBooks})
          }
      })
    } else {
      this.setState({searchedBooks: []})
    }
  }

  updateShelf = (bookUptaded, shelfUptaded) => {
    BooksAPI.update(bookUptaded, shelfUptaded).then(
        this.setState((state) => ({
            books: state.books.map((book) => {
                if(book.id === bookUptaded.id){
                    book.shelf = shelfUptaded
                }
                return book
            })
        }))
    )
  }

  render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search"> Close </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */
             }
              <input type="text"
                placeholder="Search by title or author" onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
              <BooksGrid booksGrid={this.state.searchedBooks} onChangeShelf={this.updateShelf} />
          </div>
        </div>
      )
    }
}

export default SearchBooks