import React, { useState } from 'react';
import './RegistrationForm.css';

type RegistrationFormProps = {
    onToggle?: () => void;
};

function RegistrationForm({ onToggle }: RegistrationFormProps) 
{
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setError('');
        setSuccess('');

        if (form.password !== form.passwordConfirm) {
            setError('Passwords do not match');
            return;
        }
        try {
            const res = await fetch('/api/users/signup', {
                method: 'POST',
                credentials: 'include',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: form.username,
                    email: form.email,
                    password: form.password,
                    passwordConfirm: form.passwordConfirm
                }),
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess('Registration successful!');
                await new Promise(resolve => setTimeout(resolve, 1000));
                window.location.href = '/explore'; //Redirection to explore
                setForm({
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                });
            } else {
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            console.log('Error during registration:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="form-container">
            <p className="title">Create your account</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Choose a username" value ={form.username} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" value ={form.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Choose a password" value ={form.password} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password-confirm">Confirm password</label>
                    <input type="password" name="passwordConfirm" id="password-confirm" placeholder="Confirm password" value ={form.passwordConfirm} onChange={handleChange} />
                </div>
                <button className="sign" type="submit">Sign up</button>
                {error && <div style={{color: 'red'}}>{error}</div>}
                {success && <div style={{color: 'green'}}>{success}</div>}
                <a className="login-link" href="#" onClick={e => { e.preventDefault(); onToggle && onToggle(); }}>
                Already have an account? Log in.
                </a>
            </form>
        </div>
    );
}

export default RegistrationForm