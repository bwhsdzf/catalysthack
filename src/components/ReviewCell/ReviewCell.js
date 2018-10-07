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
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8
      }}>
        <Avatar name = {name}/>
        <Rating rating={rating}/>
        <ReviewTxt text = {text} />
        <HelpfulButton />
      </div>
    )
  }
}

export default ReviewCell
