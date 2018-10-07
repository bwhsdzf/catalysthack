import React from 'react'
import Header from '../header'
import BookmarkCell from './BookmarkCell';

class BookmarkPage extends React.Component {
    state = {
        bookmarkList:[]
    }

    constructor(props) {
        super(props);
        this.state = {
            bookmarkList: [
                "Hello World!", 
                'sencond'
            ]
        }
    }

    handleRemove = (i) => {
        const newBookmarkList = this.state.bookmarkList.filter((item, j) => {
            return i !== j;
        });
        this.setState({
            bookmarkList: newBookmarkList,
        });
    }

    render() {
        return(
            <div>
                <Header />
                <div style={{
                    marginTop: 20,
                    marginLeft: 80,
                    marginRight: 80,
                    // border: "1px solid black"
                }}>
                    {this.state.bookmarkList.map((item, index) => (
                        <BookmarkCell
                            text ={item}
                            handleRemove={this.handleRemove}
                            index={index}
                        />
                    ))}
                </div>
            </div>
           )
    }
}

export default BookmarkPage