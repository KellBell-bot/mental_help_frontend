import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import React, { Component } from "react";
import { withAlert } from 'react-alert';
import { BrowserRouter, Route } from 'react-router-dom'
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import About from './Components/About'
import Filter from './Containers/Filter'
import LoginForm from './Containers/LoginForm'
import SignUp from './Containers/SignUp'
import PractitionerList from './Components/PractitionerList';
import UserDashboard from './Containers/UserDashboard'
import PractitionerProfile from './Containers/PractitionerProfile';


const practUrl= "http://localhost:3000/practitioners"

class App extends Component {
  
  
  state ={
    practitioners: [],
    isLoggedin: false,
    currentUser: {},
    inputValue: ""
  }

  async componentDidMount(){
    const response = await fetch(practUrl)
    const data = await response.json()
    this.setState({ practitioners : data})
  }
  
  handleTextChange = inputValue => this.setState({ inputValue })

  handleLogin= (userData) =>{
    this.setState({
      isLoggedin: !this.state.isLoggedin,
      currentUser: userData
      
    })
    sessionStorage.setItem("currentUser", JSON.stringify(userData))
    
  }

  // handlePractIssues=()=>{

   
  // }

  handleLogout=(event)=>{


  }

  render(){
    const alert = this.props.alert
   
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Route  exact path="/" render={() =>  <Hero />} />
        <Filter handleTextChange= {this.handleTextChange}/>
        <Route  exact path="/" render={() =>  <PractitionerList  inputText={this.state.inputValue} practData= {this.state.practitioners}/>} />
        <Route  exact path="/practitioner/:id" render={(props) =>  { const paramsID = props.match.params.id; 
                                                                      
                                                                    const practitionerDeets = this.state.practitioners.find(practitioner => practitioner.id == paramsID)
                                                                   
                                                                    return <PractitionerProfile practitionerInfo={practitionerDeets} {...props} handleLogin={this.handleLogin}/>}} />
        <Route exact path="/login" render={() => <LoginForm handleLogin= {this.handleLogin}/> } />
        <Route exact path="/about" render={() => <About /> } />
        <Route exact path="/signup" render={() => <SignUp /> } /> 
        <Route exact path="/dashboard" render={() => this.state.isLoggedin ? <UserDashboard userData={ this.state.currentUser }/> : null  } />
      </BrowserRouter>
    </div>
  )}
}

export default withAlert()(App);
