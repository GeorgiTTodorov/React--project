import { useState, useEffect } from 'react';
import * as imageService from '../../services/imageService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';

import styles from './Gallery.module.css'
import GalleryListItem from '../gallery-list-item/GalleryListItem.jsx';

export default function Gallery() {

    const [ images, setImages ] = useState([]);

    useEffect(() => {

        const getAllImages = async () => {

            const result = await imageService.getAllImages();

            setImages(result);
        };

        getAllImages();
    }, []);

    return (
    <>
        <section className={styles.sectionTitle}>
            <BackButton />
            <h2>Gallery</h2>
        </section>
        <section className={styles.gallery}>
            {images.map(image => (
                (<GalleryListItem key={image.objectId} {...image}/>)
            ))}
        </section>
    </>
    );
}