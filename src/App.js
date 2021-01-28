// import logo from './logo.svg';
import './App.css';
import './assets/output.css';
import React, { Component } from "react";
import { withAlert } from 'react-alert';
import { BrowserRouter, Route,  Link } from 'react-router-dom'
import NavBar  from './Components/NavBar';
import Hero  from './Components/Hero';
import About from './Components/About'
// import Filter from './Containers/Filter'
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
    currentUser: 0,
    inputValue: "",
    showSearch: false,
    
  }

 componentDidMount(){
    fetch(practUrl)
      .then(response => response.json())
      .then(data => this.setState({ practitioners : data}))
        this.setState({inputValue: ""})
      
    
  }
  
  handleTextChange = inputValue => this.setState({ inputValue })

  handleInputReload=() => {
    this.setState({inputValue: ""})
  }

  handleLogin= (userData) =>{
    sessionStorage.setItem("currentUser", userData.id)
    this.setState({
      isLoggedin: true,
      currentUser: userData.id
    }) 
  }

  handleShowSearch =() => {
    this.setState({
        showSearch: !this.state.showSearch
    })
}

 
// checkLogIn=()=>{this.state.currentUser === null }

  render(){
    // const alert = this.props.alert
    // console.log(this.state.practitioners)
    console.log(this.state.currentUser)
  return (
    <div className="">
      <BrowserRouter>
        <NavBar handleInputReload={this.handleInputReload} />
        <Route exact path="/dashboard" render={() =>  <UserDashboard userData={ this.state.currentUser }/> } />
        <Route  exact path="/" render={() =>  <Hero handleshowSeacrh={this.handleShowSearch} handleTextChange= {this.handleTextChange}/>} />
        {sessionStorage.getItem("currentUser") !== null ? <Link to="/dashboard" className="btn btn-link text-muted ">Back to Dashboard</Link> : null}
        
        
        <Route  exact path="/" render={() =>  <PractitionerList  inputText={this.state.inputValue} practData= {this.state.practitioners}/>} />
        <Route  exact path="/practitioner/:id" render={(props) =>  { const paramsID = props.match.params.id; 
                                                                      
                                                                    const practitionerDeets = this.state.practitioners.find(practitioner => practitioner.id == paramsID)
                                                                   
                                                                    return <PractitionerProfile practitionerInfo={practitionerDeets} {...props} handleLogin={this.handleLogin}/>}} />
        <Route exact path="/login" render={() => <LoginForm handleLogin= {this.handleLogin}/> } />
        <Route exact path="/about" render={() => <About /> } />
        <Route exact path="/signup" render={() => <SignUp /> } /> 
      </BrowserRouter>
    </div>
  )}
}

export default withAlert()(App);
