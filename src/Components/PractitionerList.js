import React, { Component } from 'react'
import PractitionerCard from './PractitionerCard'




class PractitionerList extends Component {
    
    render(){    
        // const issues= this.props.practData.filter((pract)=> (pract.filter_issues.some(array => array.title === this.props.inputText)))
      
    //    console.log(this.props.practData)
      
    return (
        <div>
            {this.props.practData.filter((pract)=> pract.zip_code?.includes(this.props.inputText) || pract.name?.includes(this.props.inputText)).map((pract) => 
            <PractitionerCard key={pract.id} practitioner={pract} /> )} 
        </div>
       
    )}


}
export default PractitionerList;
