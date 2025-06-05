import React, { useState } from 'react';
import styles from './Register.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function Register() {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={styles.landingBody}>
            <img 
                src={genericCouples}
                alt="two_couples"
                className={loaded ? styles.fadeIn : styles.hidden}
                onLoad={() => setLoaded(true)}
            />
            <div>
                <RegistrationForm />
            </div>
        </div>
    );
}

export default Register;