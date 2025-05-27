import styles from './Register.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useState } from 'react';

function Register() {
    const [loaded, setLoaded] =useState(false);
    return (
        <div className={styles.landingBody}>
            <img 
            src={genericCouples}
            alt="two_couples"
            className={loaded ? styles.fadeIn : styles.hidden}
            onLoad={() => setLoaded(true)}
            />
            {/* <div className={loaded ? styles.fadeIn : styles.hidden}>find your match</div> */}
            <RegistrationForm />
        </div>
    )
}

export default Register