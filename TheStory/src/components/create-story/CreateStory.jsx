import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as storyService from '../../services/storyService.js';
import * as imageService from '../../services/imageService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';

import styles from './CreateStory.module.css';

const formInitialValues = {
    title: '',
    imageUrl: '',
    genre: '',
    text: '',
};

export default function CreateStory () {

    const [formValues, setFormValues] = useState(formInitialValues);
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const submitHandler = async (e) => {
        
        e.preventDefault();
        const userData = localStorage.getItem('user');
        let owner = {};
        
        if (userData) {
            owner = JSON.parse(userData);
        }

        if (formValues.title === '' || formValues.imageUrl === '' || formValues.genre === '' || formValues.text === '') {
            return;

        } else if(!formValues.imageUrl.includes('https://')) {
            return;

        } else {
            const result = await storyService.createStory({...formValues, ownerName: owner.name, token: owner.token});
            const image = await imageService.createImage({articleId: result.objectId, imageUrl: result.imageUrl, title: result.title});
            resetFormHandler();
            navigate('/stories');

        }
        
    }

    const resetFormHandler = () => {
        setFormValues(formInitialValues);
    }

    return (
    <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.createStory}>
            
                <h2>Create Story</h2>

                <form className='story'>
                    <div className='inputs'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' id='title' onChange={changeHandler} value={formValues.title}/>
                        <label htmlFor="imageUrl">Image:</label>
                        <input type="text" name='imageUrl' id='imageUrl' placeholder='Place an image URL here' onChange={changeHandler} value={formValues.imageUrl}/>
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" name='genre' id='genre' onChange={changeHandler} value={formValues.genre}/>
                    </div>
                    <div className='textarea'>
                        <label htmlFor="text">Text:</label>
                        <textarea name="text" id="text" cols="40" rows="15" onChange={changeHandler} value={formValues.text}></textarea>
                        <button onClick={submitHandler}>Create Story</button>
                    </div>
                </form>
            
        </section>
    </>
    );
}