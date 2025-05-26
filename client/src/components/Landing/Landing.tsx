import styles from './Landing.module.css';
import genericCouples from '../../assets/generic_couples.svg';
import { useState } from 'react';

function Landing() {
    const [loaded, setLoaded] =useState(false);
    return (
        <div className={styles.landingBody}>
            <img 
            src={genericCouples}
            alt="two_couples"
            className={loaded ? styles.fadeIn : styles.hidden}
            onLoad={() => setLoaded(true)}
            />
            <div className={loaded ? styles.fadeIn : styles.hidden}>find your match</div>
        </div>
    )
}

export default Landing