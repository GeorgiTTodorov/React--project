import { useState, useEffect } from 'react';
import * as storyService from '../../services/storyService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';
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
        <section className={styles.stories}>
            <BackButton />
            {stories.map(story => (
                <StoryListItem key={story.objectId} {...story} />
            ))}

        </section>
    );
}