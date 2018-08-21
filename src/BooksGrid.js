import React, {Component} from 'react';
import Book from './Book';

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.booksGrid.map(book => <Book book={book} key={book.id}/>)}
            </ol>
        )
    }
}

export default BooksGrid;