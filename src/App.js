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
      <div className="app">
        <Route path='/search' component={SearchBooks}/>
        <Route exact path='/' render={() => (<BookList books={this.state.books} updateShelf = {this.updateShelf}/>)}/>
      </div>
    )
  }
}

export default BooksApp
