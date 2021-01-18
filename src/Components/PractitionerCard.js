import React from 'react'

export default function PractitionerCard({ practitioner }) {
    return (
    
        
    // <!-- Question Listing Item Card -->
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
        <div className="grid grid-cols-12 gap-3">
            {/* <!-- Meta Column --> */}
            <div className="col-span-0 sm:col-span-2 text-center hidden sm:block">
                {/* <!-- Answer Counts --> */}
                <img href="#" src= {practitioner.image} className="grid grid-rows-2 mx-auto mb-4 py-6 w-4/5 2lg:w-3/5 rounded-md bg-green-400">
                
                </img>
            </div>
            {/* <!-- Summary Column --> */}
            <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
                <div className="grid block sm:hidden"></div>
                    
                <div className="mt-2">
                    <a href="#" className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline">
                        {practitioner.name}
                    </a>

                <div className="flex justify-between items-center hidden sm:block">
                    <span className="font-light text-gray-600">
                        {practitioner.title}
                    </span>
                </div>


                    <p className="mt-2 text-gray-600 text-sm md:text-md">
                            {practitioner.description}
                    </p>
                </div>

                {/* <!-- Question Labels --> */}
                <div className="grid grid-cols-2 mt-4 my-auto">
                    {/* <!-- Categories  --> */}
                    <div className="col-span-12 lg:col-span-8">
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-red-400 hover:bg-red-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            practitioner.issues1
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-yellow-400 hover:bg-yellow-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            practitioner.issues2
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            practitioner.issues3
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            practitioner.issues4
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
