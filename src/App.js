import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import About from './Components/About'
import LoginForm from './Containers/LoginForm'
import SignUp from './Containers/SignUp'
import PractitionerList from './Components/PractitionerList';
import UserDashboard from './Containers/UserDashboard'


const practUrl= "http://localhost:3000/practitioners"

class App extends Component {

  state ={
    practitioners: [],
    isLoggedin: false,
    currentUser: {}
  }

  componentDidMount(){
    fetch(practUrl)
    .then(response => response.json())
    .then (data => this.setState({ practitioners : data}))
}

  handleLogin= (data) =>{
    this.setState({
      isLoggedin: !this.state.isLoggedin,
      currentUser: data
    })
  }

  render(){
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Route  exact path="/" render={() =>  <Hero />} />
        <Route  exact path="/" render={() =>  <PractitionerList practData= {this.state.practitioners}/>} />
        <Route exact path="/login" render={() => <LoginForm /> } />
        <Route exact path="/about" render={() => <About /> } />
        <Route exact path="/signup" render={() => <SignUp /> } /> 
        <Route exact path="/dashboard" render={() => this.state.isLoggedin ? <UserDashboard /> : null } />
      </BrowserRouter>
    </div>
  )}
}

export default App;
