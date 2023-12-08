import { useState, useEffect } from 'react';
import * as storyService from '../../services/storyService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';
import StoryListItem from '../story-list-item/StoryListItem.jsx';

import styles from './Stories.module.css'

export default function Stories() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        const getAllStories = async () => {
            const result = await storyService.getAllStories();
            
            setStories(result);
        }
        getAllStories();    
    }, [])

    return (
    <>
        <section className={styles.title}>
            <section className={styles.btns}>
                <BackButton />
                <HomeButton />
            </section>
            <h2>Stories</h2>
        </section>
        <section className={styles.stories}>
            {stories.map(story => (
                <StoryListItem key={story.objectId} {...story} />
            ))}

        </section>
    </>
    );
}