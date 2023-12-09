import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

import * as userService from '../../services/userService.js';

import styles from './Header.module.css'

export default function Header() {

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ name, setName ] = useState('');
    const [ token, setToken ] = useState('');
    const navigate = useNavigate();

    useEffect (() => {
        const userInfo = localStorage.getItem('user');
        let user;

        if (userInfo) {
            user = JSON.parse(userInfo);
            setIsLoggedIn(true);
            setName(user.email);
            setToken(user.token);
        }

    }, [isLoggedIn]);

    const logout = async () => {
        
        const response = await userService.logoutUser(token);

        if (response.ok) {
            localStorage.removeItem('user');
            navigate('/');
        }

    }

    return (
        <>
        <header className='site-header'>
            <h1 className="site-title">
                <ul>
                    <li className={styles.imgContainer}>{isLoggedIn ? <Link to='/user/dashboard'><img src="/src/assets/book.png" alt="" /></Link> : <Link to='/'><img src="/src/assets/book.png" alt="" /></Link>}</li>
                    <li>TheStory</li>
                </ul>
            </h1>
            <nav className={styles.siteNavigation}>
                <ul className={styles.ulNavigation}>
                    <li><Link to='/contact-us'>Contact us</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>{isLoggedIn && <Link to='/user/dashboard'>Dashboard</Link>}</li>
                    <li>{isLoggedIn && <Link to='/user/profile'>Profile</Link>}</li>
                    <li>{isLoggedIn && <Link to='/stories/create'>Create Story</Link>}</li>
                    <li>{isLoggedIn ? <span>Logged in as:<span className={styles.username}> {name}</span></span> : <Link to='/login'>Login</Link>}</li>
                    <li>{isLoggedIn ? <Link onClick={logout}>Logout</Link> : <Link to='/register'>Register</Link>}</li>
                </ul>
            </nav>
        </header>
        </>
    );
}