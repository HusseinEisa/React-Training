import React, { useState } from 'react'
import Image from './SignUpImage.png';
import './FigmaForm.css';
import LogInSubmit from '../../Lab4/Task1/Submit/LoginSubmit';
import SignUpSubmit from '../../Lab4/Task1/Submit/SignupSubmit';

function FigmaForm() {
    
    const [CurrentPage, setCurrentPage] = useState("SignUp")
    const [OtherPage, setOtherPage] = useState("LogIn")
    const [Submitted, setSubmit] = useState(false)
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    
    const ChangePage = () => {
        let X = CurrentPage;
        setCurrentPage(OtherPage);
        setOtherPage(X);
    }
    
    
    return (
        <section className='FigmaFormePage'>
            <div className='FigmaFormContainer'>
                <div className='FigmaForm'>
                    <div className='Figmalogo'></div>
                    {Submitted ?
                        <>
                            {CurrentPage === "LogIn" ?
                                <div>
                                    <LogInSubmit email={Email} date={new Date()}/>
                                    <button className='SubmitButton' onClick={()=>setSubmit(false)}>Back</button>
                                </div>
                                :
                                <div>
                                    <SignUpSubmit name={UserName} email={Email} date={new Date()}/>
                                    <button className='SubmitButton' onClick={()=>setSubmit(false)}>Back</button>
                                </div>
                            }
                        </>
                        :
                        <form className='Form' onSubmit={()=>setSubmit(true)}>
                            <div className='FormTitle'>
                                <span>Welcome to Design Community</span>
                                {CurrentPage === "SignUp" ?
                                    <p className='Link'>Already have an ccount? <a onClick={ChangePage}>{OtherPage}</a></p>
                                    :
                                    <p className='Link'>Don't have an account? <a onClick={ChangePage}>{OtherPage}</a></p>
                                }
                            </div>
                            
                            {CurrentPage === "SignUp" ? 
                                <div className='InputContainer'>
                                    <label htmlFor='Username' className='UsernameLabel'>Username</label>
                                    <input required type='text' value={UserName} name='Username' className='UsernameInput' onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            :
                                ""
                            }
                            
                            <div className='InputContainer'>
                                <label htmlFor='Email' className='EmailLabel'>Email</label>
                                <input required type='email' value={Email} name='Email' className='EmailInput' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div className='InputContainer' id='PasswordContainer'>
                                <label htmlFor='Password' className='PasswordLabel'>Password</label>
                                <input required type='password' value={Password} name='Password' className='PasswordInput' onChange={(e) => setPassword(e.target.value)} />
                                
                                {CurrentPage === "SignUp" ? 
                                    <div className='ImportantPoints'>
                                        <ul>
                                            <li>Use 8 or more characters</li>
                                            <li>One special character</li>
                                        </ul>
                                        <ul>
                                            <li>One uppercase character</li>
                                            <li>One number</li>
                                        </ul>
                                        <ul>
                                            <li>One lowercase character</li>
                                        </ul>
                                    </div>
                                :
                                    ""
                                }
                            </div>
                            
                            {CurrentPage === "SignUp" ? 
                                <div className='CheckboxContainer'>
                                    <input type='checkbox' name='Checkbox' className='CheckboxInput' />
                                    <label htmlFor='Checkbox' className='CheckboxLabel'>I want to receive emails about the product, feature updates, events, and marketing promotions.</label>
                                </div>
                                :
                                ""
                            }
                            
                            {CurrentPage === "SignUp" ? 
                                <div className='TermsContainer'>
                                    <p>By creating an account, you agree to the <span>Terms of use</span> and <span>Privacy Policy</span>. </p>
                                </div>
                                :
                                ""
                            }
                            
                            <div className='SubmitContainer'>
                                <button type='submit' className='SubmitButton'>{CurrentPage}</button>
                                {CurrentPage === "SignUp" ?
                                    <p className='Link'>Already have an ccount? <a onClick={ChangePage}>{OtherPage}</a></p>
                                    :
                                    <p className='Link'>Don't have an account? <a onClick={ChangePage}>{OtherPage}</a></p>
                                }
                            </div>
                            
                        </form>
                    }
                </div>
                <div className='FigmaFormImageContainer'>
                    <img src={Image} alt="SignUpImage" className='FigmaFormImage' />
                </div>
            </div>
        </section>
    )
}

export default FigmaForm;