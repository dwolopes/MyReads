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

  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
  }

  updateShelf = (bookUptaded, shelfUptaded) => {
    BooksAPI.update(bookUptaded, shelfUptaded).then( res => 
    {
      if(!('error' in res)){
        bookUptaded.shelf = shelfUptaded;
        let newBooks = this.state.books.filter( book => book.id !== bookUptaded.id);
        console.log(newBooks)
        if(bookUptaded.shelf !== 'none'){
          newBooks.push(bookUptaded)
        }
        this.setState({
          books: newBooks
        })
      } else {
        console.log('Error in uptaded shelf!')
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
