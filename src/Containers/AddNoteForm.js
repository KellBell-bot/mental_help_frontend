import React, { Component } from 'react'

export default class AddNoteForm extends Component {

    state={
        title: "",
        notes: ""
    }

    submitNote=(event)=>{
        event.preventDefault()

        const newNote={
            title: this.state.title,
            notes: this.state.notes,
            user_id: sessionStorage.getItem("currentUser")
        }


        fetch("http://localhost:3000/appointment_notes", {
            method: "POST",
            headers:  {"Content-Type": "application/json"},
            body: JSON.stringify(newNote)
        }).then(response => response.json())
         .then(data => this.setState({notesArray: [...this.props.notesArray, data]}))
         window.location.reload()
    }


    render() {
        // console.log(this.state.appointment_notes)
        return (
            <div>
               <form onSubmit={(event) => this.submitNote(event)} className="d-flex align-items-center justify-content" >
                <div className="flex ">
                    <div className="flex  ">
                        <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Note Title
                            </label>
                            <input type="text" onChange={(event)=> this.setState({title: event.target.value})} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
                                <p className="text-gray-600 text-xs italic">Name this note. Maybe the date or Doctor</p>
                        </div>
                    </div>
                    <div className="flex ">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Notes
                        </label>
                        <textarea onChange={(event)=>this.setState({notes: event.target.value})}className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" ></textarea>
                        
                    </div>
                    </div>
                    <div className="md:flex md:items-center">
                    <div className="-mr-1">
                        <input type='submit'   className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Add Review'/>    
                        </div>
                    
                    </div>
                </div>
               </form>
            </div>
                    
           
       
        )
    }
}
