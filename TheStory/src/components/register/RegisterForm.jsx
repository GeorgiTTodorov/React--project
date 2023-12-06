import { useState } from 'react';

import styles from './RegisterForm.module.css';
import BackButton from '../util-components/back-button/BackButton.jsx';

const formInitialState = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};

export default function RegisterForm() {

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
        resetFormHandler();
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    }

    return (
        <>
        <BackButton />
        <section className={styles.registerForm}>
        <h2>Register</h2>
        <form>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name='username'
                id='username' 
                placeholder='Enter username...' 
                value={formValues.username} 
                onChange={changeHandler}/>
            <label htmlFor="email">E-mail</label>
            <input
                type="text"
                name='email'
                id='email' 
                placeholder='Enter email...' 
                value={formValues.email} 
                onChange={changeHandler}/>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name='password' 
                id='password' 
                placeholder='Enter password...'
                value={formValues.password} 
                onChange={changeHandler}/>
            <label htmlFor="re-password">Repeat password</label>
            <input 
                type="password" 
                name='rePassword' 
                id='rePassword' 
                placeholder='Repeat password...'
                value={formValues.rePassword} 
                onChange={changeHandler}/>
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
        </section>
        </>
    );
}
