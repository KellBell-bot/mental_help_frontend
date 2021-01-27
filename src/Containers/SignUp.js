import React, {Component} from 'react'
import { Link } from 'react-router-dom'

 class SignUp extends Component {

    state={
        name: "",
        email: "",
        password: "",
        password_confirmation: ""

    }

    render(){
    return (
        <div>
            <div className="grid min-h-screen place-items-center">
            <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold">Hi there 👋 ,  <span className="font-normal"> please fill in your information to continue</span></h1>
                <form className="mt-6"> 
                <div className="flex justify-between gap-3">
                    <span className="w-full">
                    <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Name</label>
                    <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    </span>
                </div>
                <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <label for="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <button type="submit" className="w-full py-3 mt-6 rounded-sm font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Register
                </button>
                <Link to="/login" className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</Link>
                </form>
            </div>
            </div>
        </div>
    )
}
 }
export default SignUp
