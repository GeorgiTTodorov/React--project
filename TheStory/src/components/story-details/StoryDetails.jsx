import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as storyService from '../../services/storyService.js';
import BackButton from "../util-components/back-button/BackButton.jsx";

import styles from './StoryDetails.module.css';

export default function StoryDetails () {

    const [ story, setStory ] = useState({});
    const params = useParams();

    useEffect(() => {

        const getStory = async () => {
            const result = await storyService.getStoryById(params.objectId);

            setStory(result);
        };

            getStory();
    }, []);

    return (
        <>
        <BackButton />
        <section className={styles.story}>
            <div className={styles.imgContainer}>
                <img src={story.imageUrl} alt="" />
            </div>
            <div className={styles.storyInfo}>
                <h2>{story.title}</h2>
                <span>{story.genre}</span>
                <p>{story.text}</p>
                <span></span>
                <div className={styles.buttons}>
                    <Link to={`/stories/${params.objectId}/edit`}>Edit</Link>
                    <Link to={`/stories/${params.objectId}/delete`}>Delete</Link>
                </div>
            </div>
        </section>
        </>
    );
}