import { useState } from 'react';

import styles from './LoginForm.module.css';

const formInitialState = {
    email: '',
    password: '',
};

export default function LoginForm() {

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
            <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
        </section>
    );
}