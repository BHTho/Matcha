import styles from './Header.module.css';
//import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className={styles.Header}>
            <ul>
                <li className='headerImg'>
                    <NavLink to="/"><img src="MatchaLogo.svg" alt="matchalogo"/></NavLink>
                </li>
                <div>
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
                </div>
            </ul>
        </nav>
    )

}

export default Header