import React, { Component } from 'react'
import ReviewCard from '../Components/ReviewCard'

export default class ReviewForm extends Component {
    
    state={
        comment: "",
        currentUser: ""
    }
    
    onSubmit= async (event)=>{
        event.preventDefault()

        const newReview= {
            comment: this.state.comment
        }

        const responce= await fetch ("http://localhost:3000/reviews", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newReview)
        })
       const reviewData= await responce.json()
       this.props.handleNewReview(reviewData)
        event.target.reset()
    }

    
    render() {
        
        return (
            <div>
             <div className="flex items-center justify-center shadow-lg mt-30 mx-8 mb-4 max-w-lg">
                <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <textarea onChange={(event) => this.setState({comment: event.target.value})} className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                    </div>

                    <div className="w-full flex items-start md:w-full px-3">
                        <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                    
                                    
                        </div>
                        <div className="-mr-1">
                        <input type='submit' onSubmit={(event) => this.submitForm(event)} className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Add Review'/>    
                        </div>
                    </div>
                    </div>
                </form> 
            </div>
            </div>
             
        )
    }
}
