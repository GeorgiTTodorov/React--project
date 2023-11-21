import styles from './Header.module.css'

export default function Header() {


    return (
        <>
        <header className='site-header'>
            <h1 className="site-title">
                <ul>
                    <li className={styles.imgContainer}><a href="" ><img src="/src/assets/book.png" alt="" /></a></li>
                    <li><a href="">TheStory</a></li>
                </ul>
            </h1>
            <nav className="site-navigation">
                <ul>
                    <li><a href="">Contacts</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}