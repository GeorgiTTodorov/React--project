import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as imageService from '../../services/imageService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';

import styles from './ImageDetails.module.css';

export default function ImageDetails() {

    const [image, setImage] = useState({});
    const { objectId } = useParams();

    useEffect (() => {

        const getOne = async () => {
           const result = await imageService.getOneImage(objectId);
           setImage(result)
           
        }
        
        getOne();
    }, [objectId])

    return (
        <>
        <BackButton />
        <section className={styles.imageDetails}>
            <h3>{image.title}</h3>
            <div className={styles.imageContainer}>
                <img src={image.imageUrl} alt="" />
            </div>
            <Link to={`/stories/${image.articleId}`}>Read the article</Link>
        </section>
        </>
    );
}