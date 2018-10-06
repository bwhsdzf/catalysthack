import React from 'react'

class ReviewTxt extends React.Component {
  render() {
    return(
      <div style={{alignItems: 'center',
        display: 'flex',
        paddingTop: 4,
        paddingBottom: 4,
      }}>
        {this.props.text}
      </div>
    )
  }
}

export default ReviewTxt
