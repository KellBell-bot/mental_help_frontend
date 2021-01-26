import React from 'react'
import ReviewCard from '../Components/ReviewCard'


function ReviewsContainer({ reviewComment }) {
    // console.log(reviewComment.filter_reviews)
    
    const practitionerReviews= Object.entries(reviewComment).map(([key, value]) => value.comment)
    
    
    return (
        <div>
             <div className="py-4 px-4">
             
                
                {practitionerReviews.map(review => <ReviewCard key={review.id} reviewData={review}/>)}
                
              
            </div>
        </div>
    )
}

export default ReviewsContainer
