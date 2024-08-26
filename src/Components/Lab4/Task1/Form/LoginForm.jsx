import React , {Component} from 'react';

import SignupForm from "./SignupForm";
import LoginSubmit from "../Submit/LoginSubmit";
import "./FormStyle.css";

class LoginForm extends Component {
    constructor(){
        super();
        
        this.state = {
            CurrentPage: "LogIn",
            Done: false,
            email: "",
        };
        
        this.ChangePage = this.ChangePage.bind(this)
        this.Submited = this.Submited.bind(this)
    }
    
    ChangePage () {
        this.setState ({
            CurrentPage: "SignUp",
        })
    }
    
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }
    
    Submited(){
        this.setState({
            Done: true,
        })
    }
    
    render(){
        const {CurrentPage, Done, email} = this.state
        
        return(
            <div className='Container'>
                {Done ? <LoginSubmit email={email} date={new Date()} /> : null}
                {CurrentPage==="LogIn" && !Done ? 
                    <form class="form">
                        <p class="title">LogIn</p>
                    <p class="message">Signup now and get full access to our app. </p>
                    
                    <label>
                        <input required="" value={email} onChange={this.handleEmailChange} type="email" class="input" />
                        <span>Email</span>
                    </label> 
                    
                    <label>
                        <input required="" type="password" class="input" />
                        <span>Password</span>
                    </label>
                    
                    <button class="submit" onClick={this.Submited}>Submit</button>
                    
                        <p class="signin">Already have an acount ? <a onClick={this.ChangePage}>Signup</a> </p>
                    </form>
                :
                    null
                }
                {CurrentPage==="SignUp" && !Done ? <SignupForm /> : null}
            </div>
        )
    }
}

export default LoginForm;