import React from 'react'
import Button from '@material-ui/core/Button'
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown'

class RatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return(
      <div>
        <text style={{fontSize: 10}}>{this.state.clicks} people find this helpful!</text>
        <Button onClick={this.IncrementItem} size="small">
          <ThumbUp />
        </Button>
        <Button onClick={this.DecreaseItem} size="small">
          <ThumbDown />
        </Button>
      </div>
    )
  }
}

export default RatingButton
