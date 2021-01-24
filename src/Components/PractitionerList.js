import React, { Component } from 'react'
import PractitionerCard from './PractitionerCard'
import Filter from '../Containers/Filter'



class PractitionerList extends Component {


    render(){    
    return (
        <div>
            <Filter />
            {this.props.practData.map((pract) => 
            <PractitionerCard key={pract.id} practitioner={pract} /> )}
        </div>
       
    )}
}

export default PractitionerList;
