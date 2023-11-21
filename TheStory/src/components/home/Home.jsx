import styles from './Home.module.css'

export default function Home() {


    return (
        <>
        <main className={styles.homePage}>
            <section className={styles.exploreSection}>
                <h2>Nature has a story on it's own</h2>
                <p>Explore what Nature has to offer</p>
                <a href="" className={styles.exploreBtn}>Learn More</a>
            </section>
        </main>
        </>
    );
}