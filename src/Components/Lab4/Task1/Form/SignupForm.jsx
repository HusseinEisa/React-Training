import React , {Component} from 'react';

import LoginForm from "./LoginForm";
import SignupSubmit from "../Submit/SignupSubmit";
import "./FormStyle.css";

class SignupForm extends Component {
    constructor(){
        super();
        
        this.state = {
            CurrentPage: "SignUp",
            Done: false,
            fname: "",
            lname: "",
            email: "",
        };
        
        this.ChangePage = this.ChangePage.bind(this)
        this.Submited = this.Submited.bind(this)
    }
    
    ChangePage () {
        this.setState ({
            CurrentPage: "LogIn",
        })
    }
    
    handleFirstNameChange = (event) => {
        this.setState({ fname: event.target.value });
    }
    
    handleLastNameChange = (event) => {
        this.setState({ lname: event.target.value });
    }
    
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    
    Submited(){
        this.setState ({
            Done: true,
        })
    }
    
    render(){
        const {CurrentPage, Done} = this.state
        
        return(
            <div className='Container'>
                {Done ? <SignupSubmit name={this.state.fname + " " + this.state.lname} email={this.state.email} date={new Date()}/> : null}
                {CurrentPage==="SignUp" && !Done ? 
                    <form class="form">
                        <p class="title">SignUp</p>
                    <p class="message">Signup now and get full access to our app. </p>
                    
                    <div class="flex">
                        <label>
                            <input required="" value={this.state.fname} onChange={this.handleFirstNameChange} type="text" class="input" />
                            <span>Firstname</span>
                        </label>
                        
                        <label>
                            <input required="" value={this.state.lname} onChange={this.handleLastNameChange} type="text" class="input" />
                            <span>Lastname</span>
                        </label>
                    </div>  
                    
                    <label>
                        <input required="" value={this.state.email} onChange={this.handleEmailChange} type="email" class="input" />
                        <span>Email</span>
                    </label> 
                    
                    <label>
                        <input required="" type="password" class="input" />
                        <span>Password</span>
                    </label>
                    
                    <label>
                        <input required="" type="password" class="input" />
                        <span>Confirm password</span>
                    </label>
                    
                    <button class="submit" onClick={this.Submited}>Submit</button>
                    
                        <p class="signin">Already have an acount ? <a onClick={this.ChangePage}>Login</a> </p>
                    </form>
                :
                    null
                }
                {CurrentPage === "LogIn" ? <LoginForm /> : null}
            </div>
        )
    }
}

export default SignupForm;