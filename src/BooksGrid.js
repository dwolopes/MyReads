import React, {Component} from 'react';
import Book from './Book';

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                {
                    this.props.booksGrid.map(book => {
                        return <Book book={book} key={book.id} onChangeShelf={this.props.onChangeShelf}/>
                    }
                )}
            </ol>
        )
    }
}

export default BooksGrid;