import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';

import styles from './BraveStories.module.css';

export default function BraveStories() {

    return (
        <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.braveStoriesSection}>
            
        </section>
        </>
        
    );

};