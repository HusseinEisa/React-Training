import React , {Component} from 'react';

import "./FormStyle.css";

class Form extends Component {

    Context = { 
        SignUp:"SignUp", 
        Login:"LogIn", 
    };

    constructor(){
        super();
        
        this.state = {
            CurrentPage: this.Context.Login,
            OtherPage: this.Context.SignUp,
        };

        this.ChangePage = this.ChangePage.bind(this)
    }

    ChangePage () {
        {this.state.CurrentPage === "LogIn" ? 
            this.setState ({
                CurrentPage: this.Context.SignUp,
                OtherPage: this.Context.Login,
            }) :
            this.setState ({
                CurrentPage: this.Context.Login,
                OtherPage: this.Context.SignUp,
            })
        }

        {this.state.CurrentPage === "LogIn" ? 
            this.State = {
                CurrentPage: this.Context.SignUp,
                OtherPage: this.Context.Login,
            } :
            this.State = {
                CurrentPage: this.Context.Login,
                OtherPage: this.Context.SignUp,
            }
        }
    }

    render(){
        const {CurrentPage, OtherPage} = this.state

        return(
            <section className="form">
                <p className="title">{CurrentPage}</p>
                {CurrentPage==="LogIn" ? 
                    <p className="message">Welcome back to our app. </p> :
                    <p className="message">Signup now and get full access to our app. </p> 
                }
                {CurrentPage==="LogIn" ? 
                    "" :
                    <label>
                        <input className="input" type="text" placeholder="" required=""/>
                        <span>Firstname</span>
                    </label>
                }
                {CurrentPage==="LogIn" ? 
                    "" :
                    <label>
                        <input className="input" type="text" placeholder="" required=""/>
                        <span>Lastname</span>
                    </label>
                }
                
                <label>
                    <input className="input" type="email" placeholder="" required=""/>
                    <span>Email</span>
                </label> 

                <label>
                    <input className="input" type="password" placeholder="" required=""/>
                    <span>Password</span>
                </label>
                {CurrentPage==="LogIn" ? 
                    "" :
                    <label>
                        <input className="input" type="password" placeholder="" required=""/>
                        <span>Confirm password</span>
                    </label>
                }

                <button className="submit">Submit</button>

                {CurrentPage==="LogIn" ? 
                    <p className="signin">Don't have an acount ? </p> :
                    <p className="signin">Already have an acount ? </p> 
                }

                <button className='a' onClick={this.ChangePage} >{OtherPage}</button>
            </section>
        )
    }
}

export default Form;