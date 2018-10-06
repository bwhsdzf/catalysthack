import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Avatar from './Avatar';
import Rating from './Rating';
import ReviewTxt from './ReviewTxt';
import HelpfulButton from './HelpfulButton';

class ReviewCell extends React.Component {
  render() {
    return (
      <div style={{
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8
      }}>
        <Avatar />
        <Rating />
        <ReviewTxt text = "Hi" />
        <HelpfulButton />
      </div>
    )
  }
}

export default ReviewCell
