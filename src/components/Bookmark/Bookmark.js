import React from 'react'
import BookmarkHeader from './BookmarkHeader';
import BookmarkCell from './BookmarkCell';

class Bookmark extends React.Component {
    render() {
        return(
            <div>
                <BookmarkHeader/>
                <div style={{
                    padding: 4,
                }}>
                    <BookmarkCell/>
                </div> 
            </div>
        )
    }
}

export default Bookmark