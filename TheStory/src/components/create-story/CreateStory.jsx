import BackButton from '../util-components/back-button/BackButton.jsx';
import styles from './CreateStory.module.css';

export default function CreateStory () {

    return (
        <section className={styles.createStory}>
            <BackButton />
        </section>
    );
}