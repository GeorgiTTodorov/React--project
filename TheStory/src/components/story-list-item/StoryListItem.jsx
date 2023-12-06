import { Link } from 'react-router-dom';

import styles from './StoryListItem.module.css';

export default function StoryListItem ({
    imageUrl,
    genre,
    title,
    objectId
}) {

    return (
        <section className={styles.storyListItem}>
            <div className={styles.imgContainer}>
                <img src={imageUrl} alt="" />
            </div>
                <h3>{title}</h3>
                <span>{genre}</span>
            <Link to={`/stories/${objectId}`}>Read More</Link>
        </section>
    );
}