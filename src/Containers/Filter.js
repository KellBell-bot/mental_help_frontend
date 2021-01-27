import React, { Component }from 'react'

export default class Filter extends Component {
    render(){
    return (
      
        <div class="form-outline">
        <input type="search" id="form1" placeholder="Search by name or zip code" onChange={(event) => this.props.handleTextChange(event.target.value)} class="form-control"></input>
      </div>
    )
    }
}
