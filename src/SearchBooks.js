import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class SearchBooks extends Component{

  state = {
    books: []
  }

  updateQuery = (query) => {
    if( query !== ''){
      BooksAPI.search(query.trim()).then((books) => {
        this.setState({books})
      })
    } else {
      this.setState({books: []})
    }
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
          {console.log(this.state.books)}
              <BooksGrid booksGrid={this.state.books}/>
          </div>
        </div>
      )
    }
}

export default SearchBooks