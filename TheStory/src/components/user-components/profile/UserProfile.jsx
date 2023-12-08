import { Link } from 'react-router-dom';

import BackButton from '../../util-components/back-button/BackButton.jsx';
import HomeButton from '../../util-components/back-button/home-button/HomeButton.jsx';

import styles from './UserProfile.module.css';

export default function UserProfile() {

    const user = localStorage.getItem('user');
    let info;
    
    if (user) {
        info = JSON.parse(user);
    }

    return (
        <section className={styles.profileSection}>
            <section className={styles.btns}>
                <BackButton />
                <HomeButton />
            </section>
            <section className={styles.profilePage}>
                <h2>Your Profile:</h2>
                <section className={styles.userInfo}>
                    <div className={styles.avatar}>
                        <img src={info.imageUrl} alt="" />
                    </div>
                    <div className={styles.textFields}>
                        <h4>Username: {info.name}</h4>
                        <h4>Email: {info.email}</h4>
                        <Link to='/user/profile/edit'>Edit</Link>
                    </div>
                </section>
            </section>
        </section>
    );
}