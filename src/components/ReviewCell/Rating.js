import React from 'react'

class Rating extends React.Component {
  render() {
    return(
      <img
        style={{
          width: 100,
          height: 25,
          alignitems: 'center',
          display: 'flex',
          paddingTop: 4,
          paddingBottom: 4
        }}
        src="https://nrchealth.com/wp-content/uploads/2016/12/star-ratings-blog1.png"

      />
    )
  }
}

export default Rating
