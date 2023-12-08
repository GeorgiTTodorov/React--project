import { useState, useEffect } from 'react';
import * as imageService from '../../services/imageService.js';

import GalleryListItem from '../gallery-list-item/GalleryListItem.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';
import BackButton from '../util-components/back-button/BackButton.jsx';

import styles from './Gallery.module.css'

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
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
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