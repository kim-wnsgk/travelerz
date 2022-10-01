import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import Banner from '../components/Banner'

function Home() {
    return (
        <div className={styles.container}>
            <Banner />
            <div><Link to="/rank">여행지 순위</Link></div>
            <div><Link to="/location">지도</Link></div>
        </div >
    );
}

export default Home;