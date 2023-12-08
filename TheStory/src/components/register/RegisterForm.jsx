import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as userService from '../../services/userService.js';

import styles from './RegisterForm.module.css';
import BackButton from '../util-components/back-button/BackButton.jsx';

const formInitialState = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};

export default function RegisterForm() {

    const [ formValues, setFormValues ] = useState(formInitialState);
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const result = await userService.registerUser(formValues.username ,formValues.email, formValues.password);
        
        if (result.code) {
            setError(result.message);
            setFormValues(formInitialState);
            return;
        } else {
            resetFormHandler(); 
        }

    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        navigate('/login');
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
            <label htmlFor="rePassword">Repeat password</label>
            <input 
                type="password" 
                name='rePassword' 
                id='rePassword' 
                placeholder='Repeat password...'
                value={formValues.rePassword} 
                onChange={changeHandler}/>
                {error && <p className={styles.error}>{error}</p>}
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
        </section>
        </>
    );
}
