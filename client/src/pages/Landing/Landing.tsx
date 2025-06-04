import styles from './Landing.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import LogIn from '../../components/LogIn/LogIn';
import { useState } from 'react';

function Landing() {
    const [loaded, setLoaded] =useState(false);
    
    // Handle login
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
    
    return (
        <div className={styles.landingBody}>
            <img 
            src={genericCouples}
            alt="two_couples"
            className={loaded ? styles.fadeIn : styles.hidden}
            onLoad={() => setLoaded(true)}
            />
            <LogIn />
            <div className={loaded ? styles.fadeIn : styles.hidden}>find your match</div>
        </div>
    )
}

export default Landing