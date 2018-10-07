import React from 'react'
import { Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddBox'

class BookmarkCell extends React.Component {
    render() {
        const { text } = this.props

        return(
            <div>
                <text style={{
                    verticalAlign: '-webkit-baseline-middle', 
                    fontWeight: 'bold',
                }}>
                    { text }
                </text>
                <Button style={{float: 'right'}}>
                    <AddIcon/>
                </Button>
            </div>
        )
    }
}
  

export default BookmarkCell