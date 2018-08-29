import React from 'react'
import BookList from './BooksList'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  
  // Get all books which belongs to a one of the shelves
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  // Filter and uptaded shelf based on the books' reading status
  updateShelf = (bookUptaded, shelfUptaded) => {
    BooksAPI.update(bookUptaded, shelfUptaded).then( res => 
    {
      if(!('error' in res)){
        bookUptaded.shelf = shelfUptaded;
        // Filter out the uptaded book of the array of books' reading status
        let newBooks = this.state.books.filter( book => book.id !== bookUptaded.id);
        if(bookUptaded.shelf !== 'none'){
          // Push the uptaded book with its new shelf into the array of books' reading status
          newBooks.push(bookUptaded);
        }
        this.setState({
          books: newBooks
        })
      } else {
        alert('Error in uptaded shelf!');
      }
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search'  render={() => (<SearchBooks books={this.state.books} onChangeShelf = {this.updateShelf}/>)}/>
        <Route exact path='/' render={() => (<BookList books={this.state.books} onChangeShelf = {this.updateShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp