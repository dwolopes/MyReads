import React, {Component} from 'react';

class Book extends Component {
    state  = {
        selectOptions: [
            {
                option: 'Move to...',
                value: 'move'
            },
            {
                option:'Currently Reading',
                value: 'currentlyReading'
            },
            {
                option:'Want to Read',
                value: 'wantToRead'

            },
            {
                option: 'Read',
                value: 'read'
            },
            {
                option: 'None',
                value: 'none'
            }
        ]
    }
    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '{this.props.book.imageLinks.thumbnail}' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event)=>{this.props.onChangeShelf(this.props.book, event.target.value)}}>
                            {
                                // setting default values to the select's option based on the books' reading status
                                this.state.selectOptions.map(option => {
                                    if(option.option === 'move'){
                                        return <option value={option.value} key={option.option} disabled>{option.option}</option>
                                    } else if(option.value === this.props.book.shelf){
                                        return <option value={option.value} key={option.option} selected>{option.option}</option>
                                    }
                                    else {
                                        return <option value={option.value} key={option.option}>{option.option}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    { 'authors' in this.props.book > 0 && 
                        this.props.book.authors.map((author, index) =>
                            <div className="book-authors" key={index}>{author}</div>
                        )
                    }
                </div>
            </li>
        )
    }
}

export default Book;