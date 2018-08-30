import React, {Component} from 'react';
import PropTypes from 'prop-types'

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
                        {
                            'imageLinks' in this.props.book > 0 ? (
                            <div className="book-cover" 
                                style=
                                    {{width: 128, height: 193, 
                                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                                    }}>
                            </div>
                            ) : (
                                <div className="book-cover" 
                                    style=
                                        {{width: 128, height: 193, 
                                            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GIW5WOteCORnSU7664_5JLppdXtsPWRpKXbVkRIHMXttXBWc")' 
                                        }}>
                                </div>
                            )
                        }
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
                    { 
                        // get if they exists all authors' name and show it below the books' image
                        'authors' in this.props.book > 0 && 
                        this.props.book.authors.map((author, index) =>
                            <div className="book-authors" key={index}>{author}</div>
                        )
                    }
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}
  

export default Book;