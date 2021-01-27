import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Containers/Filter'

class Hero extends Component{
    state ={
           
        showSearch: false
        
      }

      handleShowSearch =() => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    
    render(){
        
    return (
        <div className="flex bg-purple-100 py-24 justify-center">
            <div className="p-12 text-center max-w-2xl">
                <div className="md:text-3xl text-3xl font-bold">Need some help ?</div>
                <div className="text-xl font-normal mt-4">mental help. has a range of prfessionals in your area to help you grow, discover and heal.
                </div>
                <div className="mt-6 flex justify-center h-12 relative">
                <Link to="/signup" className="flex shadow-md font-medium absolute py-2 px-4 text-green-100
                cursor-pointer bg-gray-600 rounded text-lg tr-mt  svelte-jqwywd">Start Your Journey Here
                </Link>
                </div>
                <div className="d-flex justify-content-md-center">
                <button onClick={() => this.handleShowSearch()} className=" btn btn-link text-muted">Filter</button>
                </div> 
                {this.state.showSearch === true ? <div className="px-10 pt-6"><Filter handleTextChange= {this.props.handleTextChange}/>
        </div> : null }
    </div>
</div>
    )
}
}
export default Hero