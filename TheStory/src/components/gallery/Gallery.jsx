import BackButton from '../util-components/back-button/BackButton.jsx';
import styles from './Gallery.module.css'

export default function Gallery() {

    return (
    <>
        <BackButton />
        <section className={styles.gallery}>

            <section className={styles.artwork}>
                
            </section>

            <section className={styles.bookart}>

            </section>

            <section className={styles.nature}>

            </section>

        </section>
    </>
    );
}