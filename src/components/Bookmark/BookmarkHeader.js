import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class BookmarkHeader extends React.Component {
    render() {
        return(
                <AppBar style={{
                            height: 40,
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'inherit'
                        }}>
                        <Typography variant="title" style={{
                            color: 'white',
                            paddingLeft: 6,
                        }}>
                            Bookmark
                        </Typography>
                </AppBar>
        )
    }
}

export default BookmarkHeader