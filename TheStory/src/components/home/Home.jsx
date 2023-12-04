import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {


    return (
        <div className={styles.container}>
        <main className={styles.homePage}>
            <section className={styles.exploreSection}>
                <h2>Nature has a story on it's own</h2>
                <p>Explore what TheStory has to offer</p>
                <Link to={'/learn-more'} className={styles.exploreBtn}>Learn More</Link>
            </section>

            <section className={styles.carousel}>
                <article className={styles.gallery}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1569531412913-bb060ae58891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhdW50aW5nfGVufDB8fDB8fHww" alt="" />
                    </div>
                    <h3>The Gallery</h3>
                    <p>A collection of documented images</p>
                    <Link to={'/gallery'} className={styles.viewGallery}>Explore</Link>
                </article>
                <article className={styles.stories}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0b3J5fGVufDB8fDB8fHww" alt="" />
                    </div>
                    <h3>Stories</h3>
                    <p>A collection of documented experiences</p>
                    <Link to={"/stories"} className={styles.viewGallery}>Explore</Link>
                </article>
                <article className={styles.create}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1566939028087-c4be299e0593?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3>Contribute</h3>
                    <p>Share your story with others</p>
                    <Link to={'/stories/create'} className={styles.createContent}>Create</Link>
                </article>
            </section>
            
        </main>
        <section className={styles.media}>
                <h4>The Narrative that guides us</h4>
                <p>Inspiration comes individualy to those who seek it</p>
                <div className={styles.buttons}>
                    <Link to="/register">Create Account</Link>
                    <Link to="/login">Login</Link>
                </div>
        </section>
        </div>
    );
}