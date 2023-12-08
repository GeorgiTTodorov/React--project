import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import styles from './HomeButton.module.css';

export default function HomeButton() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    return (
        <>
        <FontAwesomeIcon className={styles.homeBtn} icon={faHouse} onClick={goHome}/>
        </>
    );
}