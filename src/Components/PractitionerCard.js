import React from 'react'

export default function PractitionerCard({ practitioner }) {

    const {name, title, description, image, filter_issues}= practitioner
    // console.log(filter_issues)

    const practIssues= Object.entries(filter_issues).map(([key, value]) => value.title)
    console.log(practIssues[1])
    return (  
    // <!-- Question Listing Item Card -->
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6">
        <div className="grid grid-cols-12 gap-3">
            {/* <!-- Meta Column --> */}
            <div className="col-span-0 sm:col-span-2 text-center hidden sm:block">
                {/* <!-- Answer Counts --> */}
                <img href="#" src= {image} className="grid grid-rows-2 mx-auto mb-2 py-2 w-4/5 2lg:w-3/5 rounded-md bg-purple-200">
                
                </img>
            </div>
            {/* <!-- Summary Column --> */}
            <div className="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
                <div className="block sm:hidden"></div>
                    
                <div className="mt-2">
                    <a href="#" className="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline">
                        {name}
                    </a>

                <div className="flex justify-between items-center sm:block">
                    <span className="font-light text-gray-600">
                        {title}
                    </span>
                </div>


                    <p className="mt-2 text-gray-600 text-sm md:text-md">
                            {description}
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
                            {practIssues[0]}
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-yellow-400 hover:bg-yellow-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            {practIssues[1]}
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-green-400 hover:bg-green-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            {practIssues[2]}
                        </a>
                        <a href="#" className="inline-block rounded-full text-white 
                            bg-blue-400 hover:bg-blue-500 duration-300 
                            text-xs font-bold 
                            mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                            opacity-90 hover:opacity-100">
                            {practIssues[3]}
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
