import { useState } from 'react';
import { Link } from 'react-router-dom'

import BackButton from '../util-components/back-button/BackButton.jsx';
import HomeButton from '../util-components/back-button/home-button/HomeButton.jsx';

import styles from './LearnMore.module.css';

export default function LearnMore () {

    const [visible, setVisibility] = useState('');
    
    const visibilityHandler = (event) => {
        
        switch (event.currentTarget.children[0].textContent) {
            case 'The Hermit': setVisibility('The Hermit');  break;
            case 'The Cruel': setVisibility('The Cruel');  break;
            case 'The Brave': setVisibility('The Brave');  break;
            default: break;
        }   
    }

    const clearStateHandler = () => {
        setVisibility('');
    }

    return (
    <>
        <section className={styles.btns}>
            <BackButton />
            <HomeButton />
        </section>
        <section className={styles.learnMoreSection}>
            <h2>These are the paths</h2>
                <section className={styles.banner} onMouseOver={visibilityHandler} onMouseLeave={clearStateHandler}>

                    <h3 className={styles.bannerLogo} style={{display: visible === 'The Hermit' ? 'none' : 'block'}}>The Hermit</h3>
                    <img src="https://i.pinimg.com/736x/dd/ed/d4/ddedd4ba1087910e6b99ad0c2fe3177b.jpg" alt="" />
                    
                    <div className={styles.text} style={{display: visible === 'The Hermit' ? 'block' : 'none'}}>
                        {<h3>The Hermit</h3> && visible}
                        <h4>Test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum, laudantium omnis laborum odio commodi sit sequi officia nesciunt esse expedita amet dicta in eveniet. Ducimus veritatis totam sit, molestias quis assumenda nobis, reiciendis corporis quaerat fugiat itaque harum libero quas facere, recusandae ab aliquam nihil minus maxime velit! Eaque.</p>
                        <Link to="/stories/hermit-stories">Select</Link>
                    </div>   
                </section>

                <section className={styles.banner} onMouseOver={visibilityHandler} onMouseLeave={clearStateHandler}>
                    <h3 className={styles.bannerLogo} style={{display: visible === 'The Cruel' ? 'none' : 'block'}}>The Cruel</h3>
                    <img src="https://i.pinimg.com/564x/4d/6e/4e/4d6e4e258297714b3ddf7ac1329a10e6.jpg" alt="" />

                    <div className={styles.text} style={{display: visible === 'The Cruel' ? 'block' : 'none'}}>
                        {<h3>The Cruel</h3> && visible}
                        <h4>Test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum, laudantium omnis laborum odio commodi sit sequi officia nesciunt esse expedita amet dicta in eveniet. Ducimus veritatis totam sit, molestias quis assumenda nobis, reiciendis corporis quaerat fugiat itaque harum libero quas facere, recusandae ab aliquam nihil minus maxime velit! Eaque.</p>
                        <Link to="/stories/cruel-stories">Select</Link>
                    </div> 
                </section>

                <section className={styles.banner} onMouseOver={visibilityHandler} onMouseLeave={clearStateHandler}>
                    <h3 className={styles.bannerLogo} style={{display: visible === 'The Brave' ? 'none' : 'block'}}>The Brave</h3>
                    <img src="https://i.pinimg.com/564x/49/25/dd/4925dd5f0be7e7edc7e56d5c3e8ae609.jpg" alt="" />

                    <div className={styles.text} style={{display: visible === 'The Brave' ? 'block' : 'none'}}>
                        {<h3>The Brave</h3> && visible}
                        <h4>Test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum, laudantium omnis laborum odio commodi sit sequi officia nesciunt esse expedita amet dicta in eveniet. Ducimus veritatis totam sit, molestias quis assumenda nobis, reiciendis corporis quaerat fugiat itaque harum libero quas facere, recusandae ab aliquam nihil minus maxime velit! Eaque.</p>
                        <Link to="/stories/brave-stories">Select</Link>
                    </div> 
                </section>

        </section>
    </>
    );
}