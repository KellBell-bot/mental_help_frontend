import React from 'react'
import ReviewCard from '../Components/ReviewCard'


function ReviewsContainer({ reviewComment }) {
    
    
    const practitionerReviews= Object.entries(reviewComment).map(([key, value]) => value.comment)
    
    return (
        <div>
             <div className="py-4 px-4">
             
                
                {practitionerReviews.map(review => <ReviewCard ked={review.id} reviewData={review}/>)}
                
              
            </div>
        </div>
    )
}

export default ReviewsContainer
