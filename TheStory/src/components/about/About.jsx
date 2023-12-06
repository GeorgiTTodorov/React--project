import BackButton from '../util-components/back-button/BackButton.jsx';
import styles from './About.module.css'

export default function About() {

    return (
        <>
        <BackButton />
        <section className={styles.about}>
            <h2>About this site</h2>
            <p>
                This site was built using React for a project assignment.
                It is meant to be used for educational purposes and testing of functionalities.
                You can view the repository on: <a href="https://github.com/GeorgiTTodorov/React--project">GitHub</a>
            </p>
        </section>
        </>
    );

}