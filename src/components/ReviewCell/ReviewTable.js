import React from 'react'
import ReviewCell from './ReviewCell';

class ReviewTable extends React.Component {
    render() {
        return(
            <div>
                <ReviewCell 
                    name="Rob" 
                    text="React is hard"
                    rating="3"
                />
                <ReviewCell 
                    name="Dave" 
                    text="Kirin is good teacher"
                    rating="5"
                />
            </div>
        )
    }
}

export default ReviewTable