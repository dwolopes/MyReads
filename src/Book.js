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
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event)=>{this.props.onChangeShelf(this.props.book, event.target.value)}}>
                            {
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