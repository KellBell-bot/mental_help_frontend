import React from 'react'

export default function Note({noteData}) {
    // console.log(noteData)
    return (
        <div id="accordion">
            <div className="card">
                <div className="card-header" id="heading">
                    <h5 className="mb-0">
                        <button className="btn btn-link" data-toggle="collapse" data-target="#collapse" aria-expanded="true" aria-controls="collapse">
                        {noteData.title}
                        </button>
                    </h5>
                    </div>

                    <div id="collapse" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        {noteData.notes}
                    </div>
                </div>
            </div>
        </div>
    )
}
