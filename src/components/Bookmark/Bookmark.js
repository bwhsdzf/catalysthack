import React from 'react'
import BookmarkHeader from './TableHeader';
import BookmarkCell from './BookmarkCell';

class Bookmark extends React.Component {
    render() {
        const { cellText } = this.props

        return(
            <div>
                <BookmarkHeader/>
                <BookmarkCell text = { cellText }/>
                <BookmarkCell text = { cellText }/>
            </div>
        )
    }
}

Bookmark.defaultProps = {
    cellText: "[Cell Text]"
}


export default Bookmark