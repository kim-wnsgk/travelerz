import styles from './Banner.module.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className={styles.title}><Link to='/'>Travelerz</Link></div>
    );
}

export default Banner;