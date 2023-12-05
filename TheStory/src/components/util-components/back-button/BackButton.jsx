import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './BackButton.module.css';

export default function BackButton() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
        <FontAwesomeIcon className={styles.backBtn} icon={faArrowLeft} onClick={goBack}/>
        </>
    );
}