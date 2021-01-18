import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import React, { Component } from "react";
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import PractitionerList from './Components/PractitionerList';


const practUrl= "http://localhost:3000/practitioners"

class App extends Component {

  state ={
    practitioners: [],
    isLoggedin: false
  }

  componentDidMount(){
    fetch(practUrl)
    .then(response => response.json())
    .then (data => this.setState({ practitioners : data}))
}

  render(){
  return (
    <div className="">
      <NavBar />
      <Hero />
      <PractitionerList  practData= {this.state.practitioners} />
        
      
    </div>
  )}
}

export default App;
