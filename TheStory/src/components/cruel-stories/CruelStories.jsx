import { useNavigate } from 'react-router-dom';

import styles from './CruelStories.module.css';
import BackButton from '../util-components/back-button/BackButton.jsx';

export default function CruelStories() {

    const navigate = useNavigate();
    console.log(navigate);


    return (
        <section className={styles.cruelStoriesSection}>
            <BackButton />

        </section>
    );

};