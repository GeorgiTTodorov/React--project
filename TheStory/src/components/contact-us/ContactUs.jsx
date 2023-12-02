import { useState } from 'react';

import styles from './ContactUs.module.css';

const initialFormValues = {
    email: '',
    description: ''
};

export default function ContactUs() {

    const [formValues, setFormValues] = useState(initialFormValues);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    const resetFormHandler = () => {
        setFormValues(initialFormValues);
    }

    return (
        <section className={styles.contactForm}>
        <h2>Contact us</h2>
        <p>If you wish to contact us please leave us an e-mail</p>
        <form >
            <label htmlFor="email">E-mail</label>
            <input type="text" name='email' id='email' placeholder='Enter your email...' onChange={changeHandler} value={formValues.email}/>
            <label htmlFor="desciption">Description</label>
            <textarea name="description" id="description" cols="50" rows="10" placeholder='What you would like to share...' onChange={changeHandler} value={formValues.description}></textarea>
            <button onClick={submitHandler}>Send</button>
        </form>
        </section>
    );

}