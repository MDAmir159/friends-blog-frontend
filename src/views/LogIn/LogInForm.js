import { TextField } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function LogInForm(props) {
    const{
        tempUserDetails,
        onChangeTempUserHandleNameHandler,
        onChangeTempUserEmailHandler,
        onChangeTempUserPasswordHandler,
        loginSubmitHandler
    } = props;
    return (
        <div className = "root-login">
            <form>
                <div className = "box">
                    <div className = "box-inner">
                        <div className = "form-container">
                            {/* head description */}
                            <div className = "form-title">
                                <h2>Log In</h2>
                            </div>
                            {/* handle handle */}
                            <div className="form-group">
                                <label >Enter Handle :</label>
                                <TextField
                                    type="text" 
                                    className="form-control-input" 
                                    id="userHandle" 
                                    aria-describedby="emailHelp" 
                                    value = {tempUserDetails.tempUserHandleName}
                                    onChange = {onChangeTempUserHandleNameHandler}
                                />
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label >Email address :</label>
                                <TextField
                                    type="email" 
                                    className="form-control-input" 
                                    id="userEmail" 
                                    aria-describedby="emailHelp" 
                                    value = {tempUserDetails.tempUserEmail}
                                    onChange = {onChangeTempUserEmailHandler}
                                />
                            </div>
                            
                            {/* password */}
                            <div className="form-group">
                                <label >Password:</label>
                                <TextField 
                                    type="password" 
                                    className="form-control-input" 
                                    id="userPassword" 
                                    value = {tempUserDetails.tempUserPassword}
                                    onChange = {onChangeTempUserPasswordHandler}
                                />
                            </div>
                            
                            {/* submit button */}
                            <div className = "form-group" >
                                <button 
                                    type="submit" 
                                    className = "btn btn-primary"
                                    onClick = {loginSubmitHandler}
                                >
                                Log In
                                </button>    
                            </div>
                            {/* link to sign in UI */}
                            <div className = "form-link">
                                <Link className="link" to = "/signup">Create new account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

    
    
}
