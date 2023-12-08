import { useNavigate } from 'react-router-dom';

import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';

import styles from './CruelStories.module.css';

export default function CruelStories() {

    const navigate = useNavigate();
    console.log(navigate);


    return (
        <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.cruelStoriesSection}>
        </section>
        </>
    );

};