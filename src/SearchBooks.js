import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class SearchBooks extends Component{

  state = {
    searchedBooks: []
  }

  searchQuery = (query) => {
    let searchTerm = query.trim();
    BooksAPI.search(searchTerm).then(res => {
      if(!res.error){
        this.setState(
          {
            searchedBooks: res.map( book => {
              let existsBook = this.props.books.find(b => b.id === book.id);
              if(existsBook){
                book.shelf = existsBook.shelf;
              } else {
                book.shelf = 'none';
              }
              return book;
            })
          }
        )
      }
    })
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
                placeholder="Search by title or author" onChange={(event) => this.searchQuery(event.target.value)}/>
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