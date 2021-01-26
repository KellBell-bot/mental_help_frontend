import React, { Component } from 'react'
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

export default class PractitionerProfile extends Component {

        constructor(props){
        super(props)
            this.state={
            practitionerInfo: {},
             reviews: [],
             showForm: false, 
             user: (JSON.parse(sessionStorage.getItem("currentUser")))
             }
}


    componentDidMount(){
       const practID= this.props.match.params.id
       fetch("http://localhost:3000/practitioners/"+practID)
        .then(response => response.json())
        .then(data => this.setState({practitionerInfo: data, 
                                        reviews: data.reviews}))
       
    }
    

    handleShowForm =() => {
            this.setState({
                showForm: !this.state.showForm,
            })
        }
        
        // handleUser=()=>{
            //     sessionStorage.getItem("currentUser")
            // }
            
        handleNewReview=(reviewData)=>{
            this.setState({
                reviews: [...this.state.reviews, reviewData]
                           
            })

        }
            
            


    render() {
            // const practReviews = (this.state.reviews)
            const issuesArray= (this.state.practitionerInfo.filter_issues)
            
           
           
            
        return (
            <div>
                <div className="row py-20 px-10 ">
                    <div className="col-md-10 mx-auto">
                        {/* <!-- Profile widget --> */}
                        <div className="bg-purple-100 shadow rounded overflow-hidden">
                            <div className="px-4 pt-20 pb-4 cover">
                                <div className="media align-items-end profile-head">
                                    <div className="profile mr-4"><img src={this.state.practitionerInfo.image} alt="..." width="130" className="rounded mb-2 img-thumbnail"/><a href="#" className="btn btn-outline-dark btn-sm btn-block">Add Practitioner</a>
                                    <div className="media-body mb-5 text-black">
                                        <h4 className="mt-0 mb-0">{this.state.practitionerInfo.name}</h4>
                                        <p className="small mb-4"> <i className="fas fa-map-marker-alt"></i>{this.state.practitionerInfo.title}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-light p-4 d-flex justify-content-left text-center">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block">Specialties:</h5>
                                    </li>
                                    {issuesArray && issuesArray.map(issue => (
                                        <li className="list-inline-item">
                                        <h5 className="font-weight-bold mb-0 d-block"> {issue.title} </h5>
                                    </li>))}
                                </ul>
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="mb-0">About</h5>
                                <div className="p-4 rounded shadow-sm bg-light">
                                    <p className="font-italic mb-0">{this.state.practitionerInfo.description}</p>
                                    <p className="font-italic mb-0">Fee: {this.state.practitionerInfo.fee}</p>
                                    <p className="font-italic mb-0">Phone: {this.state.practitionerInfo.phone}</p>
                                </div>
                            </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0 text-bold">Reviews</h5><button onClick={() => this.handleShowForm()} className="btn btn-link text-muted">Add review</button>
                                </div>
                                {this.state.showForm ? <ReviewForm handleNewReview={this.handleNewReview} practID={this.props.match.params.id} handleUser={this.handleUser}/> : null}
                             <ReviewsContainer reviewComment={this.state.reviews} /> 
                        </div>
                    </div> 
        </div>
    </div>   
</div>
        )
    }
}
