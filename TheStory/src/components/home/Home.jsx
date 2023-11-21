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

            <section className={styles.carousel}>
                <article className={styles.gallery}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1569531412913-bb060ae58891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhdW50aW5nfGVufDB8fDB8fHww" alt="" />
                    </div>
                    <h3>The Gallery</h3>
                    <p>A collection of documented images</p>
                    <a href="" className={styles.viewGallery}>Explore</a>
                </article>
                <article className={styles.stories}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0b3J5fGVufDB8fDB8fHww" alt="" />
                    </div>
                    <h3>Stories</h3>
                    <p>A collection of documented experiences</p>
                    <a href="" className={styles.viewGallery}>Explore</a>
                </article>
                <article className={styles.create}>
                    <div className={styles.articleImgContainer}>
                        <img src="https://images.unsplash.com/photo-1566939028087-c4be299e0593?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <h3>Contribute</h3>
                    <p>Share your story with others</p>
                    <a href="" className={styles.viewGallery}>Create</a>
                </article>
            </section>
            
        </main>
        </>
    );
}