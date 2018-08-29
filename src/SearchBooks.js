import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'


class SearchBooks extends Component{

  state = {
    empty: true,
    searchedBooks: []
  }

  searchQuery = (query) => {
    let searchTerm = query.trim();
    if(searchTerm !== ''){
      BooksAPI.search(searchTerm).then(res => {
        if(!('error' in res)){
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
              }),
              empty:false
            }
          )
        } else {
          this.setState({empty:true})
        }
      })
    } else {
      this.setState(
        {searchedBooks: [], empty:true}
      )
    }
  }

  render() {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search"> Close </Link>
            <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input type="text"
                placeholder="Search by title or author" onChange={(event) => this.searchQuery(event.target.value)}/>
            </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            {
              this.state.empty && 
                <h1>
                  <center>No book searched yet! After search it you result goes here :)</center>
                </h1>
            }
            <BooksGrid booksGrid={this.state.searchedBooks} onChangeShelf={this.props.onChangeShelf} />
          </div>

        </div>
      )
    }
}

export default SearchBooks