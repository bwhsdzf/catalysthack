import React from 'react'
import { Typography, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddBox'

class BookmarkCell extends React.Component {
    render() {
        return(
            <div style={{
                display: 'flex',
            }}>
                <text style={{justifyContent: 'center'}}>
                    Hello
                </text>
                <IconButton style={{alignItems: 'left'}}>
                    <AddIcon/>
                </IconButton>
            </div>
        )
    }
}

export default BookmarkCell