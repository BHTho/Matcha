import styles from './Header.module.css';
//import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className={styles.Header}>
            <ul>
                <li>
                    <NavLink to="/"><img src="MatchaLogo.svg" alt="matchalogo" className={styles.headerLogo}/></NavLink>
                </li>
                <li>
                    <NavLink to="/explore">Explore</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Header