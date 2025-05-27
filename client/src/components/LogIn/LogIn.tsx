import React from 'react';
import './LogIn.css';

function LogIn() {
    return (
        <div className="form-container">
            <p className="title">Log in</p>
            <form className="form">
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Choose a username" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Choose a password" />
                    <div className="forgot">
                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                    </div>
                </div>
                <button
                    className="sign"
                    type="submit"
                    onClick={async (e) => {
                        e.preventDefault();
                        const username = (document.getElementById('username') as HTMLInputElement)?.value;
                        const password = (document.getElementById('password') as HTMLInputElement)?.value;
                        try {
                            const res = await fetch('/api/login', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ username, password }),
                            });
                            if (res.ok) {
                                alert('Connexion réussie');
                            } else {
                                alert('Nom d\'utilisateur ou mot de passe incorrect');
                            }
                        } catch (err) {
                            alert('Erreur de connexion au serveur');
                        }
                    }}
                >
                    Log in
                </button>
            </form>
            <a className="register-link" href="/register">Don't have an account? Create one!</a>
        </div>
    );
}

export default LogIn