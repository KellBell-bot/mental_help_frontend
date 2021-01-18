import React, { Component } from 'react'
import PractitionerCard from './PractitionerCard'



class PractitionerList extends Component {


    render(){    
    return (
        <div>
            {this.props.practData.map((pract) => 
            <PractitionerCard key={pract.id} practitioner={pract} /> )}
        </div>
       
    )}
}

export default PractitionerList;
