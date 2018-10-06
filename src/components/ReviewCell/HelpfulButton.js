import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown'

class RatingButton extends React.Component {
  render() {
    return(
      <div style={{float: 'right'}}>
        <text style={{fontSize: 10}}>0 people find this helpful!</text>
        <Button size="small">
          <ThumbUp />
        </Button>
        <Button size="small">
          <ThumbDown />
        </Button>
      </div>
    )
  }
}

export default RatingButton
