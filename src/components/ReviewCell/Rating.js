import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component {
  render() {
    const {
      rating
    } = this.props;

    return (
      // <img
      //   style={{
      //     width: 100,
      //     height: 25,
      //     alignitems: 'center',
      //     display: 'flex',
      //     paddingTop: 4,
      //     paddingBottom: 4
      //   }}
      //   src="https://nrchealth.com/wp-content/uploads/2016/12/star-ratings-blog1.png"

      // />
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={parseFloat(rating)}
        />
      </div>
    );
  }
}

export default Rating
