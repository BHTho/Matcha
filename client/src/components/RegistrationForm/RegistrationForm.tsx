import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
    return (
        <div className="form-container">
            <p className="title">Create your account</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Choose a username" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Choose a password" />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Confirm password</label>
                    <input type="password" name="password-confirm" id="password-confirm" placeholder="Confirm password" />
                </div>
                <button className="sign">Sign in</button>
                <a className="login-link" href="/landing">Already have an account? Log in</a>
            </form>
        </div>
    );
}

export default RegistrationForm