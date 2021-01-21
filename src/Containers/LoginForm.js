import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

const loginUrl= 'http://localhost:3000/users'

class LoginForm extends Component {


    state = {
        email: "",
        password: ""
    }

    onSubmit=(event) =>{
        event.preventDefault()
        let userInfo={
            email: this.state.email,
            password: this.state.password
        }

        fetch(loginUrl, {
            method: "POST",
            headers: {'Accept': 'application/json', "Content-Type": "application/json"},
            body: JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(userData => {
            this.props.handleLogin(userData)
            this.props.history.push("/dashboard")
            console.log(userData)
            
        })
    }
// const currentUser= localStorage.getItem(this.currentUser)

render(){
    
    return (
        <div>
            {/* <!-- Root element for center items --> */}
            <div className="flex flex-col h-screen bg-gray-100">
                {/* <!-- Auth Card Container --> */}
                <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                    {/* <!-- Auth Card --> */}
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-white rounded-lg shadow-md lg:shadow-lg">

                        {/* <!-- Card Title --> */}
                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                            Login
                        </h2>

                        <form className="mt-10" method="POST">
                            {/* <!-- Email Input --> */}
                            <label for="email" className="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                            <input onChange={(event) => this.setState({email: event.target.value})} type="email" name="email" placeholder="e-mail address"
                                className="block w-full py-3 px-1 mt-2 
                                text-gray-800 appearance-none 
                                border-b-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            {/* <!-- Password Input --> */}
                            <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                            <input onChange={(event) => this.setState({password: event.target.value})} type="password" name="password" placeholder="password" autocomplete="current-password"
                                className="block w-full py-3 px-1 mt-2 mb-4
                                text-gray-800 appearance-none 
                                border-b-2 border-gray-100
                                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            {/* <!-- Auth Buttton --> */}
                            <button onClick={(event) => this.onSubmit(event)}
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                                font-medium text-white uppercase
                                focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Login
                            </button>

                            {/* <!-- Another Auth Routes --> */}
                            <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                
                                <Link to="/signup" className="flex-2 underline content-center">
                                    Create an Account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default withRouter(LoginForm)

