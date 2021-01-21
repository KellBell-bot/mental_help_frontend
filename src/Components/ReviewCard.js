import React from 'react'

export default function ReviewCard({reviewData}) {
    console.log(reviewData)
    return (
        <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
        <div className="flex flex-row justify-center mr-2">
          <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"/>
          <h3 className="text-purple-600 font-semibold text-lg text-center md:text-left ">{reviewData.name}</h3>
        </div>
        <p class="card-text"> {reviewData}</p>
      </div>
    )
}
