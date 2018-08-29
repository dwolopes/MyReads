import React, {Component} from 'react';
import Book from './Book';

// Applying Stateless Functional Components 
function BooksGrid (props) {
    return (
        <ol className="books-grid">
            {
                props.booksGrid.map(book => {
                    return <Book book={book} key={book.id} onChangeShelf={props.onChangeShelf}/>
                })
            }
        </ol>
    )
}

export default BooksGrid;