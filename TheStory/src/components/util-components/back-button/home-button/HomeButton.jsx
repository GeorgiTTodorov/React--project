import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from './HomeButton.module.css';

export default function HomeButton() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect( () => {

        const userData = localStorage.getItem('user');
        if (userData) {
            setIsLoggedIn(true);
        }

    }, [isLoggedIn])

    const navigate = useNavigate();

    const goHome = () => {

        if (isLoggedIn) {
            navigate('/user/dashboard')

        } else {
            navigate('/');
        }
    }

    return (
        <>
        <FontAwesomeIcon className={styles.homeBtn} icon={faHouse} onClick={goHome}/>
        </>
    );
}