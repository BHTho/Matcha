import styles from './Header.module.css';
//import {useState, useEffect} from 'react';

function Header() {
    return (
        <div className={styles.Header}>
            <span><a href=""><img src="MatchaLogo.svg" alt="matchalogo"/></a></span>
            <span><a href="">Explore</a></span>
            <span><a href="">Messages</a></span>
            <span><a href="">Profile</a></span>
            <span><a href="">Settings</a></span>
        </div>
    )
}

export default Header