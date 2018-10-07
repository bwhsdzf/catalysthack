import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';
import Rating from './Rating';
import ReviewTxt from './ReviewTxt';
import HelpfulButton from './HelpfulButton';

class ReviewCell extends React.Component {
  render() {
    const {
      name,
      text,
      rating,
    } = this.props

    return (
      <div style={{
        padding: 8,
      }}>
        <Avatar name = {name}/>
        <Rating rating={rating}/>
        <ReviewTxt text = {text} />
        <span style={{textAlign: 'right'}}>
          <HelpfulButton />
        </span>
      </div>
    )
  }
}

export default ReviewCell
