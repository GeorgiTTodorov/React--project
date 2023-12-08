import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as userService from '../../services/userService.js';

import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';

import styles from './LoginForm.module.css';

const formInitialState = {
    email: '',
    password: '',
};

export default function LoginForm() {

    const [formValues, setFormValues] = useState(formInitialState);
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

        const result = await userService.loginUser(formValues.email, formValues.password);

        if (result.code) {
            setError(result.message);
            setFormValues(formInitialState);
            return;
        } else {
            localStorage.setItem('user', JSON.stringify({name:result.name, email:result.email, token:result['user-token'], id:result.ownerId}));
            resetFormHandler(); 
        }

        resetFormHandler();
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        navigate('/')
    }

    return (
        <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.loginForm}>
        <h2>Login</h2>
        <form>
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
                {error && <p className={styles.error}>{error}</p>}
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
        </section>
        </>
    );
}