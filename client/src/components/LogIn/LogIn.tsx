import React, { useState } from 'react';
import './LogIn.css';

function LogIn() {

    const[form, setForm] = useState({
        username: '',
        password: ''
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
            console.log('Attempt to login', form);
            setError('');
            setSuccess('');

            try {
                const res = await fetch('/api/users/login', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: form.username,
                        password: form.password,
                    }),
                });
                const data = await res.json();
                if (res.ok) {
                    window.location.href = '/explore';
                    setSuccess('Registration successful!');
                    
                } else {
                    setError(data.message || 'Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                setError('An error occurred. Please try again later.');
            }
        };
    

    return (
        <div className="form-container">
            <p className="title">Log in</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" value ={form.username} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" value ={form.password} onChange={handleChange}/>
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                    </div>
                </div>
                <button
                    className="sign"
                    type="submit"
                    // onClick={async (e) => {
                    //     e.preventDefault();
                    //     // const username = (document.getElementById('username') as HTMLInputElement)?.value;
                    //     // const password = (document.getElementById('password') as HTMLInputElement)?.value; //A crypter
                    //     try {
                    //         const res = await fetch('/api/login', {
                    //             method: 'POST',
                    //             headers: { 'Content-Type': 'application/json' },
                    //             body: JSON.stringify({ username, password }),
                    //         });
                    //         if (res.ok) {
                    //             alert('Connexion successful');
                    //             window.location.href = '/explore';
                    //         } else {
                    //             alert('Username or password incorrect');
                    //         }
                    //     } catch (err) {
                    //         alert('Error connecting to the server');
                    //     }
                    // }}
                >
                    Log in
                </button>
                {error && <div style={{color: 'red'}}>{error}</div>}
                {success && <div style={{color: 'green'}}>{success}</div>}
            </form>
            <a className="register-link" href="/register">Don't have an account? Create one!</a>
        </div>
    );
}

export default LogIn