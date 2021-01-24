import React, { Component } from 'react'
import PractitionerCard from './PractitionerCard'




class PractitionerList extends Component {


    render(){    
        // const issues= this.props.practData.filter((pract)=> console.log(pract.filter_issues.map(array => array.title)))
    //    const issues= this.props.practData
       
      
    return (
        <div>
            {this.props.practData.filter((pract)=> pract.zip_code.includes(this.props.inputText)).map((pract) => 
            <PractitionerCard key={pract.id} practitioner={pract} /> )} 
        </div>
       
    )}
}

export default PractitionerList;
