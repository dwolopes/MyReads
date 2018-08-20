import React, {Component} from 'react';
import Book from './Book';

class BooksGrid extends Component {
    render() {
        return (
            <ol className="books-grid">
                <Book/>
            </ol>
        )
    }
}

export default BooksGrid;