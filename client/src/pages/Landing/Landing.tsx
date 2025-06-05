import styles from './Landing.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import LogIn from '../../components/LogIn/LogIn';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useState } from 'react';

function Landing() {
    const [loaded, setLoaded] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    
    //Handles the login process by sending a POST request to the server
    const handleLogin = async (username: string, password: string) => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (res.ok) {
                alert('Successful login');
            } else {
                alert('Wrong username or password');
            }
        } catch (err) {
            alert('Error connecting to the server');
        }
    };  

    const handleRegister = async (username: string, password: string) => {
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (res.ok) {
                alert('Registration successful');
                window.location.href = '/explore';
            } else {
                alert('Username already exists');
            }
        } catch (err) {
            alert('Error connecting to the server');
        }
    };
    
    return (
        <div className={styles.landingBody}>
            <img 
            src={genericCouples}
            alt="two_couples"
            className={loaded ? styles.fadeIn : styles.hidden}
            onLoad={() => setLoaded(true)}
            />

            {showLogin ? (
            <LogIn onLogin={handleLogin} />
            ) : (
            <RegistrationForm onRegister={handleRegister} />
            )}
        </div>

    )
}

export default Landing