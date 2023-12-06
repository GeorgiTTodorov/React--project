import BackButton from '../util-components/back-button/BackButton.jsx';
import styles from './CreateStory.module.css';

export default function CreateStory () {

    return (
    <>
        <BackButton />
        <section className={styles.createStory}>
            
                <h2>Create Story</h2>

                <form className='story'>
                    <div className='inputs'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" />
                        <label htmlFor="title">Image:</label>
                        <input type="text" placeholder='Place an image URL here'/>
                        <label htmlFor="title">Genre:</label>
                        <input type="text" />
                    </div>
                    <div className='textarea'>
                        <label htmlFor="text">Text:</label>
                        <textarea name="text" id="text" cols="40" rows="15"></textarea>
                        <button>Create Story</button>
                    </div>
                </form>
            
        </section>
    </>
    );
}