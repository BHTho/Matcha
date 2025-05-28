import styles from './Explore.module.css';
import ProfileCard from '../../components/profileCard/ProfileCard';

function Explore() {
    return (
        <div className={styles.ExplorePage}>
            <ProfileCard imgPath='src/assets/bazza.png' />
            <div className={styles.decisionBar}>
                <button><img src="src/assets/heart.svg" alt="loveIcon" /></button>
                <button><img src="src/assets/cross.svg" alt="crossIcon" /></button>
            </div>
        </div>
    )
}

export default Explore;