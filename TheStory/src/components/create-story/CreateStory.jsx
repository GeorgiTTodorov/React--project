import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as storyService from '../../services/storyService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';

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
        
        const result = await storyService.createStory(formValues);

        resetFormHandler();
        navigate('/stories');
    }

    const resetFormHandler = () => {
        setFormValues(formInitialValues);
    }

    return (
    <>
        <BackButton />
        <section className={styles.createStory}>
            
                <h2>Create Story</h2>

                <form className='story'>
                    <div className='inputs'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' id='title' onChange={changeHandler} value={formValues.title}/>
                        <label htmlFor="imageUrl">Image:</label>
                        <input type="text" name='imageUrl' id='imageUrl' placeholder='Place an image URL here' onChange={changeHandler} value={formValues.imageUrl}/>
                        <label htmlFor="title">Genre:</label>
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