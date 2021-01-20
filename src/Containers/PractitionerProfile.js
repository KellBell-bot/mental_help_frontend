import React, { Component } from 'react'
import ReviewForm from './ReviewForm'

export default class PractitionerProfile extends Component {

        constructor(props){
        super(props)
            this.state={
             showForm: false
             }
}

    hanldeShowForm =() => {
            this.setState({})
    }


    render() {
            console.log(this.props.practitionerInfo.name)
        return (
            <div>
                <div className="row py-20 px-10 ">
    <div className="col-md-10 mx-auto">
        {/* <!-- Profile widget --> */}
        <div className="bg-purple-100 shadow rounded overflow-hidden">
            <div className="px-4 pt-2 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3"><img src={this.props.practitionerInfo.image} alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href="#" className="btn btn-outline-dark btn-sm btn-block">Add Practitioner</a>
                    <div className="media-body mb-5 text-black">
                        <h4 className="mt-0 mb-0">{this.props.practitionerInfo.name}</h4>
                        <p className="small mb-4"> <i className="fas fa-map-marker-alt"></i>{this.props.practitionerInfo.title}</p>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-left text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div>
            <div className="px-4 py-3">
                <h5 class="mb-0">About</h5>
                <div class="p-4 rounded shadow-sm bg-light">
                    <p class="font-italic mb-0">{this.props.practitionerInfo.description}</p>
                    <p class="font-italic mb-0">Fee: {this.props.practitionerInfo.fee}</p>
                    <p class="font-italic mb-0">Phone: {this.props.practitionerInfo.phone}</p>
                </div>
            </div>
            <div class="py-4 px-4">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h5 class="mb-0">Recent photos</h5><a href="#" class="btn btn-link text-muted">Show all</a>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                    <div class="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" class="img-fluid rounded shadow-sm"/></div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
     
   
    </div>
        )
    }
}
