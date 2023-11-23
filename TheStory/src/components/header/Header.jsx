import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export default function Header() {


    return (
        <>
        <header className='site-header'>
            <h1 className="site-title">
                <ul>
                    <li className={styles.imgContainer}><Link to='/'><img src="/src/assets/book.png" alt="" /></Link></li>
                    <li><Link to='/'>TheStory</Link></li>
                </ul>
            </h1>
            <nav className={styles.siteNavigation}>
                <ul className={styles.ulNavigation}>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}