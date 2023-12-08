import { useState } from "react";

import BackButton from "../../../util-components/back-button/BackButton.jsx";
import HomeButton from "../../../util-components/back-button/home-button/HomeButton.jsx";

import styles from './EditProfile.module.css';


export default function EditProfile() {
    const data = localStorage.getItem('user');
    let userInfo;

    if (data) {
        userInfo = JSON.parse(data);
    }
    
    const formInitialState = {
        imageUrl: userInfo.imageUrl,
        email: userInfo.email,
        username: userInfo.name
    }

    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        
    }

    return (
        <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.editProfile}>
        <h2>Edit Profile</h2>
        <form>
            <label htmlFor="imageUrl">Image URL</label>
            <input
                type="text"
                name='imageUrl'
                id='imageUrl' 
                placeholder='Please provide a valid url...' 
                value={formValues.imageUrl} 
                onChange={changeHandler}/>
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name='email'
                id='email' 
                placeholder='Enter new email...' 
                value={formValues.email} 
                onChange={changeHandler}/>
            <label htmlFor="username">Username</label>
            <input 
                type="username" 
                name='username' 
                id='username' 
                placeholder='Enter username...'
                value={formValues.username} 
                onChange={changeHandler}/>
            <button type='submit' onClick={submitHandler}>Update</button>
        </form>
        </section>
        </>
    );
}