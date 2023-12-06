import { Link, useNavigate } from 'react-router-dom';

import styles from './GalleryListItem.module.css';

export default function GalleryListItem({ imageUrl, objectId }) {

    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate(`/gallery/${objectId}`)
    }

    return (
        <div className={styles.imgContainer}>
            <img src={ imageUrl } alt="" onClick={navigateToDetails}/>
        </div>
    );
}