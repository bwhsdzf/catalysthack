import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown'

class RatingButton extends React.Component {
  render() {
    return(
      <div>
        <Button>
          <ThumbUp />
        </Button>
        <Button>
          <ThumbDown />
        </Button>
      </div>g
    )
  }
}

export default RatingButton
