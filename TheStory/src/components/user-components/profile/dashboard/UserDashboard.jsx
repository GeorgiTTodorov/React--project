import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as storyService from '../../../../services/storyService.js';

import styles from './UserDashboard.module.css';
import StoryListItem from '../../../story-list-item/StoryListItem.jsx';

export default function UserDashboard() {

    const [ userstories, setUserStories ] = useState([]);

    useEffect( () => {

        const getStories = async () => {
            const data = localStorage.getItem('user');
            let user;

            if (data) {
                user = JSON.parse(data);
            }

            const result = await storyService.getUserStories(user.id);
            
            setUserStories(result);

        }

        getStories();

    }, []);

    return (
        <section className={styles.dashboard}>
            <section className={styles.userInfo}>
                <h2>Navigation: </h2>
                <div className={styles.profileInfo}>
                    <h3>Your Profile:</h3>
                    <Link to='/user/profile'>View profile</Link>
                </div>
                <div className={styles.galleryLink}>
                    <h3>View the gallery:</h3>
                    <Link to='/gallery'>View gallery</Link>
                </div>
                <div className={styles.storiesLink}>
                    <h3>View the stories:</h3>
                    <Link to='/stories'>View stories</Link>
                </div>
                <div className={styles.createStoriesLink}>
                    <h3>Create a story:</h3>
                    <Link to='/stories/create'>Create Story</Link>
                </div>
            </section>
            <section className={styles.projects}>
                <h2>Your stories:</h2>
                <div className={styles.stories}>
                    {userstories.map(story => 
                        <StoryListItem key={story.objectId} {...story}/>
                    )}
                </div>
            </section>
        </section>
    );
}