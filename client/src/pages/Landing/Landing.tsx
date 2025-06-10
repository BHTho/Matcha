import styles from './Landing.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import LogIn from '../../components/LogIn/LogIn';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Landing() {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    
    //Handles the login process by sending a POST request to the server
    const handleLogin = async (username: string, password: string) => {
        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });
            if (res.ok) {
                await new Promise(r => setTimeout(r, 200)); //Delay to allow the cookie to be set
                alert('Successful login');
                navigate('/explore');
            } else {
                alert('Wrong username or password');
            }
        } catch (err) {
            alert('Error connecting to the server');
        }
    };  

    const handleRegister = async (username: string, password: string) => {
        try {
            const res = await fetch('/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include',
            });
            if (res.ok) {
                await new Promise(r => setTimeout(r, 200)); //Delay to allow the cookie to be set
                alert('Registration successful');
                navigate('/explore');
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
            <LogIn onLogin={handleLogin} onToggle = {() => setShowLogin(false)}/>
            ) : (
            <RegistrationForm onRegister={handleRegister} onToggle = {() => setShowLogin(true)} />
            )}
        </div>

    )
}

export default Landing