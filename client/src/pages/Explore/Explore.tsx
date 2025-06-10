import styles from './Explore.module.css';
import ProfileCard from '../../components/profileCard/ProfileCard';
import heartIcon from '../../assets/heart.svg';
import crossIcon from '../../assets/cross.svg';
import bazz from '../../assets/bazza.png';

function Explore() {

    console.log('Explore page loaded');
    return (
        <div className={styles.ExplorePage}>
            <ProfileCard imgPath={bazz}/>
            <div className={styles.decisionBar}>
                <button><img src={heartIcon} alt="loveIcon" /></button>
                <button><img src={crossIcon} alt="crossIcon" /></button>
            </div>
        </div>
    )
}

export default Explore;