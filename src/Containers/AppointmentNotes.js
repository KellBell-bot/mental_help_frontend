import React, { Component }from 'react'
import Note from '../Components/Note'
import AddNoteForm from './AddNoteForm'
// import { Component } from 'react'

class AppointmentNotes extends Component {
  // console.log(notesArray)
    
    state={
      showForm: false
    }

    handleNoteForm= () =>{
          this.setState({ showForm: !this.state.showForm})
    }
    render(){
  return (
    <div>
        <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="text-2xl font-semibold">Appointment Notes</h3><button onClick={() => this.handleNoteForm()} className="btn btn-link text-muted">Add note</button>
        </div>
          {this.state.showForm === true ? <AddNoteForm notesArray={this.props.notesArray} /> : null }
         {this.props.notesArray.map(appnote => <Note key={appnote.id} noteData={appnote}/>)} 
        
      </div>
        )
    }
  }



export default AppointmentNotes
